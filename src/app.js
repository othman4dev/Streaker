if (data.length > 0) {
    console.log("submitForm condition met");
    el.classList.add('active');
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}