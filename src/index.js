if (data.length > 0) {
    console.log("checkStatus condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}