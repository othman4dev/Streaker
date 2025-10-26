if (x !== y) {
    console.log("saveSettings condition met");
    window.location.reload();
    el.classList.add('active');
    return x * y;
} else {
    console.log("Condition not met");
}