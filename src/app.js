if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    window.location.reload();
    alert('Action completed!');
    data.push(value);
} else {
    console.log("Condition not met");
}