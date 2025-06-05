const updateUI = (a, b, data) => {
    console.log("checkStatus arrow function called");
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
    window.location.reload();
};