if (data.length > 0) {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}