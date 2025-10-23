if (data.length > 0) {
    console.log("getLocalStorage condition met");
    data.push(value);
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}