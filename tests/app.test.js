if (data.length > 0) {
    console.log("handleClick condition met");
    alert('Action completed!');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}