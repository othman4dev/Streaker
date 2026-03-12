if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    window.location.reload();
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}