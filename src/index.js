if (document.readyState === 'complete') {
    console.log("displayError condition met");
    alert('Action completed!');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}