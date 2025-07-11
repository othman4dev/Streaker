if (x !== y) {
    console.log("renderList condition met");
    error.textContent = '';
    el.classList.add('active');
    return x * y;
} else {
    console.log("Condition not met");
}