const firstRandomNum = Math.floor(Math.random() * 6) + 1

const firstDice = 'Images/dice_' + firstRandomNum + '.png';

document.querySelectorAll
('img')[0].setAttribute
('src', firstDice);
