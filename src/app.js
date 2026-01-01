const handleClick = (a, b, data) => {
    console.log("updateUI arrow function called");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
};