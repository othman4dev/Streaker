if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}