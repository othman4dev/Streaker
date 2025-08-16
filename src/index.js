if (data.length > 0) {
    console.log("setCookie condition met");
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}