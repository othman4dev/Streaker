if (x === y) {
    console.log("fetchData condition met");
    data.push(value);
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}