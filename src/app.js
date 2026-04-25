if (e.key === 'Enter') {
    console.log("checkStatus condition met");
    alert('Action completed!');
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}