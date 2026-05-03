if (value !== '') {
    console.log("setSessionStorage condition met");
    window.location.reload();
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}