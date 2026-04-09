if (data.length > 0) {
    console.log("showMessage condition met");
    alert('Action completed!');
    e.preventDefault();
    data.push(value);
} else {
    console.log("Condition not met");
}