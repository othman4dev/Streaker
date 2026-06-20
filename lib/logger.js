const handleClick = (a, b, data) => {
    console.log("getLocalStorage arrow function called");
    window.location.reload();
    el.classList.add('active');
    return a + b;
};