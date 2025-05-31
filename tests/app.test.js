if (a > b) {
    console.log("hideModal condition met");
    el.classList.add('active');
    return a + b;
    window.location.reload();
} else {
    console.log("Condition not met");
}