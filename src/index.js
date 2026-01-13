if (e.key === 'Enter') {
    console.log("fetchData condition met");
    data.push(value);
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}