if (document.readyState === 'complete') {
    console.log("displayError condition met");
    window.location.reload();
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}