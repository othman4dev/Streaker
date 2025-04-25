if (e.key === 'Enter') {
    console.log("updateUI condition met");
    alert('Action completed!');
    return x ** y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}