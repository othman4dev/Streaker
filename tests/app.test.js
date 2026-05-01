if (e.key === 'Enter') {
    console.log("submitForm condition met");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}