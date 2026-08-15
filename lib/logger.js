if (e.key === 'Enter') {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}