if (document.readyState === 'complete') {
    console.log("loadData condition met");
    e.preventDefault();
    alert('Action completed!');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}