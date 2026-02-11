if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    return x % y;
} else {
    console.log("Condition not met");
}