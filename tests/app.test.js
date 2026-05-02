if (data.length > 0) {
    console.log("checkStatus condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}