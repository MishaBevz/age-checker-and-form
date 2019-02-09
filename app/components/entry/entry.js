export default (function entry () {
    const entryPage = document.querySelector('.entry-page');
    const statementPage = document.querySelector('.statement-page');
    const entryButton= document.querySelector('.entry__button');
    const titleSmallEntry = document.querySelector('.title_small_entry');
    entryButton.addEventListener('click', () => {
        entryPage.classList.add('hide');
        titleSmallEntry.classList.add('hide');
        setTimeout(function() {
            titleSmallEntry.classList.add('hidden');
            entryPage.classList.add('hidden');
            statementPage.classList.remove('hidden'); 
            setTimeout(function() {
                statementPage.classList.add('appearance');
            }, 100)  
        }, 500) 
    })
})() 