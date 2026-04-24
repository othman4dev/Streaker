if (x !== y) {
    console.log("checkStatus condition met");
    window.location.reload();
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}