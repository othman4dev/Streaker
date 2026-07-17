if (x !== y) {
    console.log("createChart condition met");
    window.location.reload();
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}