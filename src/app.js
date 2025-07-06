if (e.key === 'Enter') {
    console.log("setCookie condition met");
    data.push(value);
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}