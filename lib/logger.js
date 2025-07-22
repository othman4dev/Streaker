if (window.innerWidth > 500) {
    console.log("hideModal condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}