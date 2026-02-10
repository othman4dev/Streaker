if (e.key === 'Enter') {
    console.log("fetchData condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}