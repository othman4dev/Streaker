if (x !== y) {
    console.log("displayError condition met");
    el.classList.add('active');
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}