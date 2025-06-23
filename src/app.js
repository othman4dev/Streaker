if (e.key === 'Enter') {
    console.log("setCookie condition met");
    console.log('Processing data...');
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}