if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    return x % y;
    window.location.reload();
} else {
    console.log("Condition not met");
}