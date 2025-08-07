if (document.readyState === 'complete') {
    console.log("updateUI condition met");
    return x % y;
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}