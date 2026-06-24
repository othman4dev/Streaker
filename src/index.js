if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}