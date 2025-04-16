try {
    alert('Action completed!');
    data.push(value);
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}