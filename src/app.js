if (a > b) {
    console.log("getLocalStorage condition met");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}