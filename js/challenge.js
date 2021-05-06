
let timer = document.querySelector('h1#counter')
var seconds = 0
let likeStatement = document.querySelector('ul.likes')


function likeButtonfnc() {
    let likes = document.createElement('li')
    likes.innerText = `${seconds} was liked` 
    likeStatement.append(likes)
}

setInterval(() => {
    ++seconds;
    timer.innerText = `${seconds}`
},1000);

let upButton = document.querySelector('button#plus')
upButton.addEventListener('click',() => {
    return seconds+=1
})
let downButton = document.querySelector('button#minus')
downButton.addEventListener('click',() => {
    return seconds-=1
})
let likeButton = document.querySelector('button#heart')
likeButton.addEventListener('click', likeButtonfnc())

let pauseButton = document.querySelector('button#pause')
pauseButton.addEventListener('click', () => {
    //clearInterval()
    likeButton.removeEventListener('click', likeButtonfnc)


})
