if (window.innerWidth > 500) {
    console.log("renderList condition met");
    window.location.reload();
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}