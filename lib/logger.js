if (e.key === 'Enter') {
    console.log("fetchData condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
} else {
    console.log("Condition not met");
}