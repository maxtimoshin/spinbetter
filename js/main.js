const title = document.querySelector('.title')
const button = document.querySelector('.get-it-button')
const currentLang = document.querySelector('.current-language')

currentLang.addEventListener('click', (e) => {
    e.preventDefault()
})

const languages = document.querySelectorAll('.language')

const titlesT =  [
        {ru : '150% бонус на 1-й депозит!'},
        {eng : '150% bonus on the 1st deposit!'},
        {pl : '150% bonusu przy pierwszym depozycie!'},
        {de : '150% Bonus auf die 1. Einzahlung!'},
        {kz : '1-ші депозитке 150% бонус!'},
        {uz : 'Birinchi depozit uchun 150% bonus!'},
    ]
    
const buttonsT = [
        {ru : 'Получить!'},
        {eng : 'Get!'},
        {pl : 'Dostawać!'},
        {de : 'Bekommen!'},
        {kz : 'Алу!'},
        {uz : 'Oling!'},
    ]

const switchPageLang = () => {
    
    switch (currentLang.innerHTML) {
        case 'RU' : 
        title.innerHTML = titlesT[0].ru
        button.innerHTML = buttonsT[0].ru
        break
        case 'EN' : 
        title.innerHTML = titlesT[1].eng
        button.innerHTML = buttonsT[1].eng
        break
        case 'PL' : 
        title.innerHTML = titlesT[2].pl
        button.innerHTML = buttonsT[2].pl
        break
        case 'DE' : 
        title.innerHTML = titlesT[3].de
        button.innerHTML = buttonsT[3].de
        break
        case 'KZ' : 
        title.innerHTML = titlesT[4].kz
        button.innerHTML = buttonsT[4].kz
        break
        case 'UZ' : 
        title.innerHTML = titlesT[5].uz
        button.innerHTML = buttonsT[5].uz
        break
        default : 
        title.innerHTML = titlesT[0].eng
        button.innerHTML = buttonsT[0].eng
    }
}

languages.forEach(l => {
    l.addEventListener('click',  (e) => {
        e.preventDefault()
        let saveLang
        saveLang = currentLang.innerHTML
        currentLang.innerHTML = l.innerHTML
        l.innerHTML = saveLang
        switchPageLang()
    })
})

window.addEventListener("DOMContentLoaded", () => {
    const a = window?.serverData?.visitorData?.languageCode.toUpperCase()
    if (a === "RU" || a === "EN"  || a === "PL"  || a === "DE"  || a === "KZ"  || a === "UZ" ) {
        currentLang.innerHTML = a
        switchPageLang()
    } else {
        switchPageLang()
    }
  });
