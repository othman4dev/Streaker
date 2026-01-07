if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}