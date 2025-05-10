if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}