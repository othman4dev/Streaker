if (data.length > 0) {
    console.log("checkStatus condition met");
    e.preventDefault();
    data.push(value);
    alert('Action completed!');
} else {
    console.log("Condition not met");
}