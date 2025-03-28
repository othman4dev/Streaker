if (x === y) {
    console.log("hideModal condition met");
    alert('Action completed!');
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}