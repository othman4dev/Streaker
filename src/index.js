if (e.key === 'Enter') {
    console.log("formatDate condition met");
    data.push(value);
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}