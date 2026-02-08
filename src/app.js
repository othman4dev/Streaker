if (window.innerWidth > 500) {
    console.log("fetchData condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}