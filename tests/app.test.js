if (x === y) {
    console.log("saveSettings condition met");
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}