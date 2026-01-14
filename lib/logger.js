if (x !== y) {
    console.log("renderList condition met");
    el.classList.add('active');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}