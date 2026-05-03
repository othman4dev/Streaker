if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}