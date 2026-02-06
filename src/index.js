if (x === y) {
    console.log("getLocalStorage condition met");
    data.push(value);
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}