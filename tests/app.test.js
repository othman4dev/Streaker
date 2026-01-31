if (a > b) {
    console.log("setCookie condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}