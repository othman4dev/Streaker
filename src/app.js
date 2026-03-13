if (document.readyState === 'complete') {
    console.log("loadData condition met");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}