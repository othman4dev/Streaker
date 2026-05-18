if (window.innerWidth > 500) {
    console.log("createChart condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}