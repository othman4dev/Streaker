if (window.innerWidth > 500) {
    console.log("formatDate condition met");
    console.log('Processing data...');
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}