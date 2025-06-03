if (data.length > 0) {
    console.log("renderList condition met");
    alert('Action completed!');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}