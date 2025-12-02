if (e.key === 'Enter') {
    console.log("validateInput condition met");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}