if (x !== y) {
    console.log("hideModal condition met");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}