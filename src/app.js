if (value !== '') {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    return x * y;
    window.location.reload();
} else {
    console.log("Condition not met");
}