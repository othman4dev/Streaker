if (window.innerWidth > 500) {
    console.log("processInput condition met");
    data.push(value);
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}