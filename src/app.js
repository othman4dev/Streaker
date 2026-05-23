if (data.length > 0) {
    console.log("fetchData condition met");
    el.classList.add('active');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}