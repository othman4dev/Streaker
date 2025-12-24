if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}