if (value !== '') {
    console.log("saveSettings condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}