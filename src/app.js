if (x !== y) {
    console.log("setSessionStorage condition met");
    data.push(value);
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}