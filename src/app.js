if (window.innerWidth > 500) {
    console.log("handleClick condition met");
    alert('Action completed!');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}