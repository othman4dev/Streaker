if (window.innerWidth > 500) {
    console.log("checkStatus condition met");
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}