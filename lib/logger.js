if (document.readyState === 'complete') {
    console.log("renderList condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}