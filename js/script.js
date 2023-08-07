const keys = document.querySelectorAll('.key');

const checkbox = document.querySelector('.checkbox__keys')
const switcher = document.querySelector('.switcher')
const KeysSection = document.querySelector('.piano__keys')

const playNote = (note) =>{
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) =>{

    playNote(key.getAttribute('data-note'));
    

    if(key.className.includes('black')){
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';

}

const handleMouseUp = (key) =>{
    if(key.className.includes('black')){
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';

}

keys.forEach((key)=>{

    key.addEventListener('mousedown', () => handleMouseDown(key));

    key.addEventListener('mouseup', () => handleMouseUp(key));

});

checkbox.addEventListener('change', ({ target })=>{
    if(target.checked){
        switcher.classList.add('switcher--active');
        KeysSection.classList.remove('disabled-keys');
    }else{
        switcher.classList.remove('switcher--active');
        KeysSection.classList.add('disabled-keys');
    }
});

const keyDownMapper = {
    "Tab": ()=> handleMouseDown(keys[0]),
    "1": ()=> handleMouseDown(keys[1]),
    "q": ()=> handleMouseDown(keys[2]),
    "2": ()=> handleMouseDown(keys[3]),
    "w": ()=> handleMouseDown(keys[4]),
    "e": ()=> handleMouseDown(keys[5]),
    "3": ()=> handleMouseDown(keys[6]),
    "4": ()=> handleMouseDown(keys[7]),
    "r": ()=> handleMouseDown(keys[8]),
    "5": ()=> handleMouseDown(keys[9]),
    "t": ()=> handleMouseDown(keys[10]),
    "6": ()=> handleMouseDown(keys[11]),
    "y": ()=> handleMouseDown(keys[12]),
    "7": ()=> handleMouseDown(keys[13]),
    "u": ()=> handleMouseDown(keys[14]),
    "8": ()=> handleMouseDown(keys[15]),
    "i": ()=> handleMouseDown(keys[16]),
    "9": ()=> handleMouseDown(keys[17]),
    "o": ()=> handleMouseDown(keys[18]),
    "0": ()=> handleMouseDown(keys[19]),
    "p": ()=> handleMouseDown(keys[20]),
    "-": ()=> handleMouseDown(keys[21]),
    "[": ()=> handleMouseDown(keys[22]),
    "=": ()=> handleMouseDown(keys[23]),
    "]": ()=> handleMouseDown(keys[24]),
    "Backspace": ()=> handleMouseDown(keys[25]),
    "\\": ()=> handleMouseDown(keys[26]),
    "z": ()=> handleMouseDown(keys[27]),
    "s": ()=> handleMouseDown(keys[28]),
    "x": ()=> handleMouseDown(keys[29]),
    "d": ()=> handleMouseDown(keys[30]),
    "c": ()=> handleMouseDown(keys[31]),
    "f": ()=> handleMouseDown(keys[32]),
    "v": ()=> handleMouseDown(keys[33]),
    "g": ()=> handleMouseDown(keys[34]),
    "b": ()=> handleMouseDown(keys[35]),
}

const keyUpMapper = {
    "Tab": ()=> handleMouseUp(keys[0]),
    "1": ()=> handleMouseUp(keys[1]),
    "q": ()=> handleMouseUp(keys[2]),
    "2": ()=> handleMouseUp(keys[3]),
    "w": ()=> handleMouseUp(keys[4]),
    "e": ()=> handleMouseUp(keys[5]),
    "3": ()=> handleMouseUp(keys[6]),
    "4": ()=> handleMouseUp(keys[7]),
    "r": ()=> handleMouseUp(keys[8]),
    "5": ()=> handleMouseUp(keys[9]),
    "t": ()=> handleMouseUp(keys[10]),
    "6": ()=> handleMouseUp(keys[11]),
    "y": ()=> handleMouseUp(keys[12]),
    "7": ()=> handleMouseUp(keys[13]),
    "u": ()=> handleMouseUp(keys[14]),
    "8": ()=> handleMouseUp(keys[15]),
    "i": ()=> handleMouseUp(keys[16]),
    "9": ()=> handleMouseUp(keys[17]),
    "o": ()=> handleMouseUp(keys[18]),
    "0": ()=> handleMouseUp(keys[19]),
    "p": ()=> handleMouseUp(keys[20]),
    "-": ()=> handleMouseUp(keys[21]),
    "[": ()=> handleMouseUp(keys[22]),
    "=": ()=> handleMouseUp(keys[23]),
    "]": ()=> handleMouseUp(keys[24]),
    "Backspace": ()=> handleMouseUp(keys[25]),
    "\\": ()=> handleMouseUp(keys[26]),
    "z": ()=> handleMouseUp(keys[27]),
    "s": ()=> handleMouseUp(keys[28]),
    "x": ()=> handleMouseUp(keys[29]),
    "d": ()=> handleMouseUp(keys[30]),
    "c": ()=> handleMouseUp(keys[31]),
    "f": ()=> handleMouseUp(keys[32]),
    "v": ()=> handleMouseUp(keys[33]),
    "g": ()=> handleMouseUp(keys[34]),
    "b": ()=> handleMouseUp(keys[35]),
}

document.addEventListener('keydown', (event)=>{
    event.preventDefault();
    keyDownMapper[event.key]()
})

document.addEventListener('keyup', (event)=>{
    event.preventDefault();
    keyUpMapper[event.key]()
})