if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}