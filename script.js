let clickCount = 0;

document.getElementById('cookie').addEventListener('click', () => {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});
