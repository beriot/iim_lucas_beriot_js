/**
 * Expérimentation 2 :
 * Au maintien du click, Déplacez le carré bleu dans le carré rouge
 */


function calcXpos(event, scare,container){
    return event.pageX - container.offsetLeft - (scare.offsetWidth / 2);

}

function calcYpos(event, scare,container){
    return event.pageY - container.offsetTop - (scare.offsetWidth / 2);

}

function inArea(event, scare,container){

    const limitTop = container.offsetTop;
    const limitRight = container.offsetLeft + container.offsetWidth - scare.offsetWidth;
    const limitBottom = container.offsetTop + container.offsetHeight - scare.offsetHeight;
    const limitLeft = container.offsetLeft;

    const x = event.pageX - (scare.offsetWidth / 2) ;
    const y = event.pageY - (scare.offsetHeight / 2)  ;

    return (y >= limitTop && y <= limitBottom && x >= limitLeft && x <= limitRight);
}

window.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById('div1');
    const scare = document.getElementById('div2');
    console.log('scare : ', scare);

    let isDown = false;

    scare.addEventListener('mousedown', function () {
        isDown = true;
    });

    scare.addEventListener('mouseup', function () {
        isDown = false;
    });



    document.addEventListener('mousemove', function (event) {
        if(isDown && inArea(event, scare, container)){
            scare.style.left = calcXpos(event, scare, container) + 'px';
            scare.style.top = calcYpos(event, scare, container) + 'px';
        }

    });

});