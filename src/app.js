if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    window.location.reload();
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}