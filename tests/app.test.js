if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    el.classList.add('active');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}