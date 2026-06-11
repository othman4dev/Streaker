if (document.readyState === 'complete') {
    console.log("processInput condition met");
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}