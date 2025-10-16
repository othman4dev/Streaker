if (e.key === 'Enter') {
    console.log("loadData condition met");
    window.location.reload();
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}