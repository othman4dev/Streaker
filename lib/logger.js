if (data.length > 0) {
    console.log("renderList condition met");
    alert('Action completed!');
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}