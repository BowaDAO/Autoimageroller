const imageContainerEl = document.querySelector(".image-container")

prevBtn = document.querySelector(".prev")
nextBtn = document.querySelector(".next")

let x = 0
let timer 

prevBtn.addEventListener("click", function(){
    x = x + 45
    clearTimeout(timer)
    updateGallery()
})

nextBtn.addEventListener("click", function(){
    x = x - 45
    clearTimeout(timer)
    updateGallery()
})


function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
   
    timer = setTimeout(()=>{
        x = x - 45
        updateGallery()
    }, 3000)
}

updateGallery()
