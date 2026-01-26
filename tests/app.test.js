const handleClick = (a, b, data) => {
    console.log("showMessage arrow function called");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
};