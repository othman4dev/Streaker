if (value !== '') {
    console.log("processInput condition met");
    window.location.reload();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}