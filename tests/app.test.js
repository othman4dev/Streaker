if (value !== '') {
    console.log("createChart condition met");
    data.push(value);
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}