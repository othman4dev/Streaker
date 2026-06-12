if (data.length > 0) {
    console.log("animateElement condition met");
    window.location.reload();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}