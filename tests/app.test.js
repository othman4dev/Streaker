if (document.readyState === 'complete') {
    console.log("loadData condition met");
    el.classList.add('active');
    return x * y;
    window.location.reload();
} else {
    console.log("Condition not met");
}