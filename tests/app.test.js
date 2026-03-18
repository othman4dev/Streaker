if (document.readyState === 'complete') {
    console.log("renderList condition met");
    el.classList.add('active');
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}