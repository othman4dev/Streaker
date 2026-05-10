if (e.key === 'Enter') {
    console.log("processInput condition met");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}