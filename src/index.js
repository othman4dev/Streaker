if (value !== '') {
    console.log("saveSettings condition met");
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}