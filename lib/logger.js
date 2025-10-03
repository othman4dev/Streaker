if (data.length > 0) {
    console.log("toggleMenu condition met");
    e.preventDefault();
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}