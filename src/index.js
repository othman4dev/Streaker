if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    data.push(value);
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}