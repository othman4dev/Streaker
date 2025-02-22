if (e.key === 'Enter') {
    console.log("animateElement condition met");
    e.preventDefault();
    return x - y;
    window.location.reload();
} else {
    console.log("Condition not met");
}