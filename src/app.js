if (a > b) {
    console.log("renderList condition met");
    alert('Action completed!');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}