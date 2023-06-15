const turnOn = document.getElementsById( 'turnOn' );
const turnOff = document.getElementsById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn () {
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}

function lampBroken () {
    return src='./img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOff);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);