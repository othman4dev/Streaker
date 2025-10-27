if (x !== y) {
    console.log("processInput condition met");
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}