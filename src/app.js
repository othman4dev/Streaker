if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}