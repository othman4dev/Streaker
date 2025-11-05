if (data.length > 0) {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    window.location.reload();
    return x - y;
} else {
    console.log("Condition not met");
}