const hours = <HTMLElement>document.getElementById('hours');
const minutes = <HTMLElement>document.getElementById('minutes');
const seconds = <HTMLElement>document.getElementById('seconds');
const centiSeconds = <HTMLElement>document.getElementById('centi-seconds');
const startBtn = <HTMLElement>document.getElementById('start-btn');
const stopBtn = <HTMLElement>document.getElementById('stop-btn');
const resetBtn = <HTMLElement>document.getElementById('reset-btn');

// two digit updater
const isTwoDigit = (unit:HTMLElement):void  => {
    if(unit.innerText.length === 1){
        unit.innerText = '0' + unit.innerText;
    }
}
// reset unit after reached max limit
const resetUnit = (unit:HTMLElement, limit:number):void => {
    if(+unit.innerText > limit){
        unit.innerText = '00';
        let previousElement = <HTMLElement>unit.previousElementSibling;
        let innerElement = +previousElement.innerText;
        previousElement.innerText = innerElement + 1 + '';
    }   
}

// start button event handler
startBtn.addEventListener<'click'>('click', () => {
    const setTime = ():void => {
        let innerElement = +centiSeconds.innerText;
        centiSeconds.innerText = innerElement + 1 + '';
        resetUnit(centiSeconds, 99)
        resetUnit(seconds, 59)
        resetUnit(minutes, 59)
        isTwoDigit(centiSeconds);
        isTwoDigit(seconds);
        isTwoDigit(minutes);
        isTwoDigit(hours);
    }
    const interval:number = setInterval(setTime, 10);
    // stop button event handler
    stopBtn.addEventListener<'click'>('click',() => clearInterval(interval));
})

// reset button event handler
const resetAll = ():void => {
    centiSeconds.innerText = seconds.innerText = minutes.innerText = hours.innerText = '00';
    stopBtn.className === '' && stopBtn.click();
}

// Start and Stop button toggler
const toggleBtn = ():boolean => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');
