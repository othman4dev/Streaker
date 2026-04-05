if (x !== y) {
    console.log("getLocalStorage condition met");
    window.location.reload();
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}