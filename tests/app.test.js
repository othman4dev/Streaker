if (x !== y) {
    console.log("createChart condition met");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}