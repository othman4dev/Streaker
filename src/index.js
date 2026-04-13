if (value !== '') {
    console.log("setSessionStorage condition met");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}