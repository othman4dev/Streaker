if (data.length > 0) {
    console.log("removeItem condition met");
    e.preventDefault();
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}