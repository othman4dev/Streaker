if (document.readyState === 'complete') {
    console.log("formatDate condition met");
    alert('Action completed!');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}