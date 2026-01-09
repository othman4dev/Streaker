if (e.key === 'Enter') {
    console.log("toggleMenu condition met");
    alert('Action completed!');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}