if (x !== y) {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}