if (data.length > 0) {
    console.log("setSessionStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}