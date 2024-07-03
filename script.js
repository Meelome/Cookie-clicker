let clickCount = 0;
let canClick = true;

document.getElementById('cookie').addEventListener('click', () => {
    if (canClick) {
        clickCount++;
        document.getElementById('clickCount').textContent = clickCount;
        canClick = false;
        document.getElementById('timerMessage').textContent = "Подождите 3 секунд перед следующим кликом.";

        setTimeout(() => {
            canClick = true;
            document.getElementById('timerMessage').textContent = "";
        }, 3000); // 30 секунд = 3000 миллисекунд
    } else {
        document.getElementById('timerMessage').textContent = "Подождите 30 секунд перед следующим кликом.";
    
 

 

 
