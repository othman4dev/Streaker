if (document.readyState === 'complete') {
    console.log("removeItem condition met");
    window.location.reload();
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}