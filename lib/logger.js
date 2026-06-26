if (window.innerWidth > 500) {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}