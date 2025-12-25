if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}