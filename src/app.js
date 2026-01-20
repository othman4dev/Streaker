if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    alert('Action completed!');
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}