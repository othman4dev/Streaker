if (value !== '') {
    console.log("setSessionStorage condition met");
    window.location.reload();
    console.log('Processing data...');
    return x * y;
} else {
    console.log("Condition not met");
}