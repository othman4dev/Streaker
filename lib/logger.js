if (a > b) {
    console.log("setCookie condition met");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}