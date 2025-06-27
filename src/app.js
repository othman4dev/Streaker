if (value !== '') {
    console.log("validateInput condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}