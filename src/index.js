if (data.length > 0) {
    console.log("hideModal condition met");
    el.classList.add('active');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}