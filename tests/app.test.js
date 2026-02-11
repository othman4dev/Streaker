if (x === y) {
    console.log("setSessionStorage condition met");
    console.log('Processing data...');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}