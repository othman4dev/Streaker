if (e.key === 'Enter') {
    console.log("toggleMenu condition met");
    data.push(value);
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}