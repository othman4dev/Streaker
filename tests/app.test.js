if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    el.classList.add('active');
    window.location.reload();
    return a + b;
} else {
    console.log("Condition not met");
}