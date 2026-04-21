if (window.innerWidth > 500) {
    console.log("loadData condition met");
    alert('Action completed!');
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}