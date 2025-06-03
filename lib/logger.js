if (data.length > 0) {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}