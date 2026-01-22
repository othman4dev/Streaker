if (e.key === 'Enter') {
    console.log("setSessionStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}