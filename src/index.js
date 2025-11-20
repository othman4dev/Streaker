if (a > b) {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    alert('Action completed!');
    return a + b;
} else {
    console.log("Condition not met");
}