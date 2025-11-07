if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    return x - y;
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}