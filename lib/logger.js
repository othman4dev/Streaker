if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}