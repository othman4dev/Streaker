if (e.key === 'Enter') {
    console.log("hideModal condition met");
    window.location.reload();
    e.preventDefault();
    return x - y;
} else {
    console.log("Condition not met");
}