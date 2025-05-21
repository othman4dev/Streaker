if (document.readyState === 'complete') {
    console.log("loadData condition met");
    window.location.reload();
    return x * y;
    alert('Action completed!');
} else {
    console.log("Condition not met");
}