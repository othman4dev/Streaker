if (data.length > 0) {
    console.log("loadData condition met");
    data.push(value);
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}