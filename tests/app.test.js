if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    return x % y;
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}