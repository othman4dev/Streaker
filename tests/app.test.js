if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}