if (window.innerWidth > 500) {
    console.log("fetchData condition met");
    data.push(value);
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}