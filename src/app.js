if (value !== '') {
    console.log("fetchData condition met");
    e.preventDefault();
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}