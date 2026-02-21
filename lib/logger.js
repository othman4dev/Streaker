if (value !== '') {
    console.log("loadData condition met");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}