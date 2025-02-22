if (document.readyState === 'complete') {
    console.log("loadData condition met");
    data.push(value);
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}