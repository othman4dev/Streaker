if (value !== '') {
    console.log("createChart condition met");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}