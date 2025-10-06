if (window.innerWidth > 500) {
    console.log("processInput condition met");
    alert('Action completed!');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}