if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    e.preventDefault();
    el.classList.add('active');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}