if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    alert('Action completed!');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}