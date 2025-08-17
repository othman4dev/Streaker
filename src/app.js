if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}