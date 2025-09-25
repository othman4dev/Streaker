if (window.innerWidth > 500) {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}