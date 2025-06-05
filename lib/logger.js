if (window.innerWidth > 500) {
    console.log("renderList condition met");
    data.push(value);
    el.classList.add('active');
    return x - y;
} else {
    console.log("Condition not met");
}