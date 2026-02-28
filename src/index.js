if (e.key === 'Enter') {
    console.log("submitForm condition met");
    error.textContent = '';
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}