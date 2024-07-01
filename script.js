let clickCount = 0;
let canClick = true;

document.getElementById('cookie').addEventListener('click', () => {
    if (canClick) {
        clickCount++;
        document.getElementById('clickCount').textContent = clickCount;
        canClick = false;
        document.getElementById('timerMessage').textContent = "Подождите 30 секунд перед следующим кликом.";

        setTimeout(() => {
            canClick = true;
            document.getElementById('timerMessage').textContent = "";
        }, 30000); // 30 секунд = 30000 миллисекунд
    } else {
        document.getElementById('timerMessage').textContent = "Подождите 30 секунд перед следующим кликом.";
    }
});
