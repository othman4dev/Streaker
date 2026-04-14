if (document.readyState === 'complete') {
    console.log("processInput condition met");
    error.textContent = '';
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}