if (document.readyState === 'complete') {
    console.log("loadData condition met");
    window.location.reload();
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}