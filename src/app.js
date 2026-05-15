if (window.innerWidth > 500) {
    console.log("hideModal condition met");
    el.classList.add('active');
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}