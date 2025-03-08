if (e.key === 'Enter') {
    console.log("updateUI condition met");
    e.preventDefault();
    alert('Action completed!');
    return x / y;
} else {
    console.log("Condition not met");
}