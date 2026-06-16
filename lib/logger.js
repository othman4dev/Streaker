if (a > b) {
    console.log("saveSettings condition met");
    alert('Action completed!');
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}