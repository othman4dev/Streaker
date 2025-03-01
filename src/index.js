if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    el.classList.add('active');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}