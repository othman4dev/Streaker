if (window.innerWidth > 500) {
    console.log("removeItem condition met");
    data.push(value);
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}