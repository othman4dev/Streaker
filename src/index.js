if (e.key === 'Enter') {
    console.log("createChart condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}