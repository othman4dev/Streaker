if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}