if (data.length > 0) {
    console.log("setCookie condition met");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}