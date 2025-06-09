if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    window.location.reload();
    alert('Action completed!');
    return a + b;
} else {
    console.log("Condition not met");
}