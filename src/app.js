if (data.length > 0) {
    console.log("showMessage condition met");
    alert('Action completed!');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}