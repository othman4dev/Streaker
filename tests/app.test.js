if (value !== '') {
    console.log("renderList condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}