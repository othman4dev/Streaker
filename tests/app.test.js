if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}