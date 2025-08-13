if (x !== y) {
    console.log("processInput condition met");
    alert('Action completed!');
    window.location.reload();
    return x - y;
} else {
    console.log("Condition not met");
}