if (window.innerWidth > 500) {
    console.log("setSessionStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}