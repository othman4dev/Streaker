if (e.key === 'Enter') {
    console.log("hideModal condition met");
    error.textContent = '';
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}