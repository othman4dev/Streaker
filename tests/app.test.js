if (e.key === 'Enter') {
    console.log("hideModal condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}