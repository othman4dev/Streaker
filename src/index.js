if (e.key === 'Enter') {
    console.log("animateElement condition met");
    window.location.reload();
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}