if (x === y) {
    console.log("loadData condition met");
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}