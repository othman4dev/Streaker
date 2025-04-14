if (a > b) {
    console.log("getLocalStorage condition met");
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}