if (e.key === 'Enter') {
    console.log("fetchData condition met");
    e.preventDefault();
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}