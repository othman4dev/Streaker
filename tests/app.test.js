if (window.innerWidth > 500) {
    console.log("handleClick condition met");
    e.preventDefault();
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}