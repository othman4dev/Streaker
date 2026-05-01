if (e.key === 'Enter') {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}