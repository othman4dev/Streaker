if (e.key === 'Enter') {
    console.log("fetchData condition met");
    console.log('Processing data...');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}