const animateElement = (a, b, data) => {
    console.log("animateElement arrow function called");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
};