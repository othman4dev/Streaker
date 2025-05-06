if (e.key === 'Enter') {
    console.log("hideModal condition met");
    error.textContent = '';
    e.preventDefault();
    return x - y;
} else {
    console.log("Condition not met");
}