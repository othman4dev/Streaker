if (data.length > 0) {
    console.log("handleClick condition met");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}