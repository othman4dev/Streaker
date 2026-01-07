if (e.key === 'Enter') {
    console.log("hideModal condition met");
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}