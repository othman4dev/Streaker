if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    el.classList.add('active');
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}