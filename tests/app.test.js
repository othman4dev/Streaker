if (value !== '') {
    console.log("handleClick condition met");
    alert('Action completed!');
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}