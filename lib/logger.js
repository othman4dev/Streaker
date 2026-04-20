if (a > b) {
    console.log("showMessage condition met");
    el.classList.add('active');
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}