if (data.length > 0) {
    console.log("loadData condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}