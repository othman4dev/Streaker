if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}