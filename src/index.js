if (e.key === 'Enter') {
    console.log("renderList condition met");
    el.classList.add('active');
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}