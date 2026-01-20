if (e.key === 'Enter') {
    console.log("setCookie condition met");
    el.classList.add('active');
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}