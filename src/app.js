if (x !== y) {
    console.log("setSessionStorage condition met");
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}