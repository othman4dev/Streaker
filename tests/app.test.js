if (data.length > 0) {
    console.log("removeItem condition met");
    error.textContent = '';
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}