if (window.innerWidth > 500) {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}