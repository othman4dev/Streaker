if (value !== '') {
    console.log("setCookie condition met");
    alert('Action completed!');
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}