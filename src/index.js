if (data.length > 0) {
    console.log("hideModal condition met");
    window.location.reload();
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}