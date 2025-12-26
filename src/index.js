if (e.key === 'Enter') {
    console.log("createChart condition met");
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}