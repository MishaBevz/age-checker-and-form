export default (function confirmAge () {
    const modal = document.querySelector('.modal');
    const selectDay = document.querySelector('.list-option_days');
    const selectMonth = document.querySelector('.list-option_months');
    const selectYear = document.querySelector('.list-option_years');

    const activeDayOption = document.querySelector('.option-active_day');
    const activeMonthOption = document.querySelector('.option-active_month');
    const activeYearOption = document.querySelector('.option-active_year');
    
    const selectElems = document.getElementsByClassName('select-box')

    const selectBoxDay = document.querySelector('.select-box_day');
    const selectBoxMonth = document.querySelector('.select-box_month');
    const selectBoxYear = document.querySelector('.select-box_year');
    // Изначально открываем только поле дней, после выбора открываем последовательно выбор месяца, затем года;
    selectBoxDay.nextElementSibling.style = 'display: block';
    selectBoxDay.parentElement.style = 'height: 358px; padding-bottom: 10px';
    const userDateOfBirth = {}; // Сюда будет записываться дата рождения юзера
    const years = [];
    const days = [];
    const months = [    
        'ЯНВАРЬ', 
        'ФЕВРАЛЬ', 
        'МАРТ', 
        'АПРЕЛЬ', 
        'МАЙ', 
        'ИЮНЬ', 
        'ИЮЛЬ', 
        'АВГУСТ', 
        'СЕНТЯБРЬ', 
        'ОКТЯБРЬ', 
        'НОЯБРЬ', 
        'ДЕКАБРЬ'
    ];
    months
        .map((elem, i) => {
            let newOption = document.createElement('li');
            newOption.onclick = (e) => {
                activeMonthOption.innerText = elem;
                selectMonth.style = 'display: none';
                selectMonth.parentElement.style = 'height: none';
                userDateOfBirth.month = i+1; // записываем месяц;
                
                if(userDateOfBirth.day && userDateOfBirth.month && userDateOfBirth.year) { // Если дата рождения уже есть, проводим проверку
                    ageCheck()
                } else {
                    // После выбора месяца, открываем поле года;
                    selectBoxYear.nextElementSibling.style = 'display: block';
                    selectBoxYear.parentElement.style = 'height: 358px; padding-bottom: 10px';
                }
                
            }
            newOption.className = 'option option_month';
            newOption.innerText = `${elem}`;
            selectMonth.appendChild(newOption);
        });
    (function yearsCreator() {
        let date = new Date;
        for(let curYear = date.getFullYear()-120; curYear <= date.getFullYear(); curYear++ ) {
            years.push(curYear);    
        }
        years
            .reverse()
            .map((elem) => {
                let newOption = document.createElement('li');
                newOption.onclick = (e) => {
                    activeYearOption.innerText = elem;
                    selectYear.style = 'display: none;';
                    selectYear.parentElement.style = 'height: none';
                    userDateOfBirth.year = elem; // записываем год
                    if(userDateOfBirth.day && userDateOfBirth.month && userDateOfBirth.year) {
                        ageCheck()
                    }
                    // После выбора года делаем проверку на совершеннолетие и затем
                    // если проверка не была успешно пройдена, включаем возможность
                    // открывать все поля и даём повторить попытку
                    selectBoxDay.addEventListener('click', () => {
                        selectBoxDay.nextElementSibling.style = 'display: block';
                        selectBoxDay.parentElement.style = 'height: 358px; padding-bottom: 10px';
                    });
                    selectBoxMonth.addEventListener('click', () => {
                        selectBoxMonth.nextElementSibling.style = 'display: block';
                        selectBoxMonth.parentElement.style = 'height: auto; padding-bottom: 10px';
                    });
                    selectBoxYear.addEventListener('click', () => {
                        selectBoxYear.nextElementSibling.style = 'display: block';
                        selectBoxYear.parentElement.style = 'height: 358px; padding-bottom: 10px';
                    });
                }
                newOption.className = 'option option_year';
                newOption.innerText = `${elem}`;
                selectYear.appendChild(newOption);
            })
    }());
    function daysCreator(year, month) {   
        let lastDay = new Date(year, month+1, 0).getDate();
        selectDay.innerHTML = '';
        for(let curDay = 1; curDay <= lastDay; curDay++) {
            days.push(curDay);
        }   
        days
            .map((elem) => {
                let newOption = document.createElement('li');
                newOption.onclick = (e) => {
                    activeDayOption.innerText = elem;
                    selectDay.style = 'display: none;';
                    selectDay.parentElement.style = 'height: none';
                    userDateOfBirth.day = elem; // записываем день;
                    // После выбора дня, открываем поле месяца;
                    if(userDateOfBirth.day && userDateOfBirth.month && userDateOfBirth.year) { // Если дата рождения уже есть, проводим проверку
                        ageCheck()
                    } else {
                        selectBoxMonth.nextElementSibling.style = 'display: block';
                        selectBoxMonth.parentElement.style = 'height: auto; padding-bottom: 10px';
                    }
                    
                }
                newOption.className = 'option option_day';
                newOption.innerText = `${elem}`;
                selectDay.appendChild(newOption);        
        });            
    };
    function ageCheck() {
        let curDate = new Date;
        let setDate = new Date;
        let userDate = new Date(userDateOfBirth.year, userDateOfBirth.month-1, userDateOfBirth.day);
        setDate.setFullYear(userDate.getFullYear() + 18, userDateOfBirth.month-1, userDateOfBirth.day - 1); // отнимаю 1 день, дабы учитывать текущий день (Если вдруг юзеру исполнилось 18 сегодня)
        if(curDate < setDate) {
            alert('Вам должно быть 18 лет');
        } else {
            modal.classList.add('hide')
            setTimeout(function() {
                modal.classList.add('hidden')
            }, 400)
        }
    }
    function changeActiveOption() {
        activeDayOption.innerText = days[0];
        activeMonthOption.innerText = months[0];
        activeYearOption.innerText = years[0]
    }
    daysCreator(years[0], 0);
    changeActiveOption()
})()