if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    alert('Action completed!');
    el.classList.add('active');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}