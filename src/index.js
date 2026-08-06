if (e.key === 'Enter') {
    console.log("removeItem condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}