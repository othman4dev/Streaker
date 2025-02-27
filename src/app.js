if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    e.preventDefault();
    alert('Action completed!');
    return x % y;
} else {
    console.log("Condition not met");
}