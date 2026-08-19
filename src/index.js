if (a > b) {
    console.log("toggleMenu condition met");
    window.location.reload();
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}