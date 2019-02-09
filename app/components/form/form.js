export default (function form () {
    const checkbox = document.querySelector('#checkbox');
    const guestCheckbox = document.querySelector('#checkbox-guest');
    const formButton = document.querySelector('.form__button');
    const inputAll = document.getElementsByClassName('input');
    const inputDate = document.querySelector('.input_date');
    const fieldBlock = document.querySelector('.form__field-block');
    const secondGuestLink = document.querySelector('.form__field-block').querySelector('.link');
    const secondGuestBlock = document.querySelector('.form__field-block').querySelector('.form__block');
    secondGuestBlock.style = 'opacity: 0';
    formButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        if(secondGuestBlock.classList.contains('hidden')) {
            if(!inputAll.name.value || !inputAll.surname.value || !inputAll.email.value || !inputAll.date.value) {
                alert('Заполните все обязательные* поля')
            } else {
                if(checkbox.checked) {
                    alert('Ваша заявка успешно отправлена')
                } else {
                    alert('Отметьте согласие на обработку персональных данных')
                }
            } 
        } else {
            if(!inputAll.name.value || !inputAll.surname.value || !inputAll.email.value || !inputAll.date.value || !inputAll.guestName.value || !inputAll.guestSurname.value || !inputAll.guestEmail.value) {
                alert('Заполните все обязательные* поля')
            } else {
                if(checkbox.checked && guestCheckbox.checked) {
                    alert('Ваша заявка успешно отправлена')
                } else {
                    alert('Отметьте согласие на обработку персональных данных')
                }
            } 
        }
        
    });
    secondGuestLink.addEventListener('click', () => {
        secondGuestLink.classList.add('hidden');
        fieldBlock.classList.toggle('hide')
        setTimeout(function() {
            fieldBlock.classList.remove('hide')
            secondGuestBlock.classList.remove('hidden');
            setTimeout(function() {
                secondGuestBlock.classList.add('appearance');   
            }, 100)
        }, 500)
        document.querySelector('.form__field-block').style = "width: 516px; height: 194px; margin-top: -8px;";
        formButton.style = "transition: width 0.5s; width: 506px;";
        setTimeout(function(){
            formButton.style = 'width: 506px;'
        }, 500);
    }) 
})()