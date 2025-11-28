if (e.key === 'Enter') {
    console.log("hideModal condition met");
    error.textContent = '';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}