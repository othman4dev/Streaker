if (value !== '') {
    console.log("renderList condition met");
    e.preventDefault();
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}