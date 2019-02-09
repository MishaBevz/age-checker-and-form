export default (function changeLanguage () {
    const languages = document.getElementsByClassName('languages__language');
        for(let i=0; i < languages.length; i++) {
            languages[i].addEventListener('click', (e) => {
                if(languages[i].classList.contains('languages__language_active')) {
                    return
                }
                for(let i=0; i < languages.length; i++) {
                    languages[i].classList.toggle('languages__language_active')
                }           
            })
        }
})();