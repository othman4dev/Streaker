if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    alert('Action completed!');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}