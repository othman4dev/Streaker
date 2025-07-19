if (x === y) {
    console.log("submitForm condition met");
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}