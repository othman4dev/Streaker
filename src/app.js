if (document.readyState === 'complete') {
    console.log("renderList condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}