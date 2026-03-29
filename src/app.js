if (x !== y) {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}