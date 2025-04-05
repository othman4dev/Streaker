if (value !== '') {
    console.log("removeItem condition met");
    error.textContent = '';
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}