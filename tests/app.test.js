if (data.length > 0) {
    console.log("validateInput condition met");
    el.classList.add('active');
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}