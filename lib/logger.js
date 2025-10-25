if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    e.preventDefault();
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}