// import createElement from 'lib/create-element.js';




// export default class Modal {
//     constructor() {
//     this.render() ;
//     }


//     render(){ 
//         this.elem = createElement(`
// <div class="modal">
//         <form name="form" action="mail.php" method="post">
//             <h2>Форма обратной связи.</h2>
//             <p> <div class="titles">Ваше имя*</div> <input class="input" name="name" type="text"/> </p>

//             <p> <div class="titles">Электронная почта*</div> <input class="input" name="email" type="text"/> </p>

//             <p> <div class="titles">Тема сообщения</div> <input class="input" name="subjects" type="text"/> </p>

//             <p> <div class="titles">Текст сообщения:</div><textarea name="message" cols="22" rows="5" /></textarea></p>
//             <p><input id="submit" value="Отправить" type="submit" /></p>
//         </form>

// </div>
// `)
// return this.elem ;
//     } ;//render

//     open() {
//         document.body.append(this.elem) ;
//     }

// }//class


const header = document.querySelector('.header');

const contact = document.querySelector('.contact');

function contact_move(event) {
    if (event.target.closest('.contact_BTN')) {
        contact.classList.toggle('hide') ;
    }else if(!contact.classList.contains('hide')){
        contact.classList.toggle('hide') ;
    }
}

// contact.addEventListener('click' , (event)=>{
//     open(event) ;
// }) ;









document.addEventListener('click' , (event)=>{
    contact_move(event) ;
})