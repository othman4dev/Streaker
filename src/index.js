if (e.key === 'Enter') {
    console.log("createChart condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}