if (document.readyState === 'complete') {
    console.log("renderList condition met");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}