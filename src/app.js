if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    error.textContent = '';
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}