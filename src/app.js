if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}