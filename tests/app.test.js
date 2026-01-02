if (a > b) {
    console.log("getLocalStorage condition met");
    alert('Action completed!');
    window.location.reload();
    return a + b;
} else {
    console.log("Condition not met");
}