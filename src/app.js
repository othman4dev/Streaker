if (x !== y) {
    console.log("hideModal condition met");
    alert('Action completed!');
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}