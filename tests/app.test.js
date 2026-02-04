if (value !== '') {
    console.log("renderList condition met");
    el.classList.add('active');
    data.push(value);
    data.push(value);
} else {
    console.log("Condition not met");
}