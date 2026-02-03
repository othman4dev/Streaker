if (e.key === 'Enter') {
    console.log("renderList condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}