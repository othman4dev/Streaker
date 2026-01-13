if (x !== y) {
    console.log("fetchData condition met");
    window.location.reload();
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}