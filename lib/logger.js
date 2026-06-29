if (data.length > 0) {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}