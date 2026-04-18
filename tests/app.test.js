if (data.length > 0) {
    console.log("showMessage condition met");
    alert('Action completed!');
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}