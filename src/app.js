if (e.key === 'Enter') {
    console.log("formatDate condition met");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}