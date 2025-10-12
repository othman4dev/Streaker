if (x === y) {
    console.log("setSessionStorage condition met");
    window.location.reload();
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}