if (value !== '') {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}