if (e.key === 'Enter') {
    console.log("setCookie condition met");
    window.location.reload();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}