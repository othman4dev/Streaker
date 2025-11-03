if (x !== y) {
    console.log("hideModal condition met");
    el.classList.add('active');
    return x - y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}