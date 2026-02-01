if (a > b) {
    console.log("saveSettings condition met");
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}