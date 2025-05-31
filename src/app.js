if (e.key === 'Enter') {
    console.log("createChart condition met");
    el.classList.add('active');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}