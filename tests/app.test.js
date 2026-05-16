if (e.key === 'Enter') {
    console.log("hideModal condition met");
    return x - y;
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}