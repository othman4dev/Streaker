if (e.key === 'Enter') {
    console.log("handleClick condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}