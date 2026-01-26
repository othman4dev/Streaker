if (e.key === 'Enter') {
    console.log("setCookie condition met");
    data.push(value);
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}