if (data.length > 0) {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}