if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    e.preventDefault();
    alert('Action completed!');
    data.push(value);
} else {
    console.log("Condition not met");
}