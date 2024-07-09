'use strict';

{
    const open_modal_1 = document.getElementById('open_modal_1');
    const open_modal_2= document.getElementById('open_modal_2');
    const open_modal_3 = document.getElementById('open_modal_3');
    const mask = document.getElementById('mask');
    const modal_1 = document.getElementById('modal_1');
    const modal_2 = document.getElementById('modal_2');
    const modal_3 = document.getElementById('modal_3');

    open_modal_1.addEventListener('click', () =>{
        modal_1.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    open_modal_2.addEventListener('click', () =>{
        modal_2.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    open_modal_3.addEventListener('click', () =>{
        modal_3.classList.remove('hidden');
        mask.classList.remove('hidden');
    });



    mask.addEventListener('click', () =>{
        modal_1.classList.add('hidden');
        modal_2.classList.add('hidden');
        modal_3.classList.add('hidden');
        mask.classList.add('hidden');
    });




}