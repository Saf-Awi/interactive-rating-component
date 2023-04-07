const mainDiv = document.querySelector(".main-div")
const thankYou= document.querySelector(".thank-you")
const submitBtn = document.querySelector(".btn-submit")
const ratings = document.querySelectorAll(".btn")
const selectedRating = document.getElementById("rating")



submitBtn.addEventListener("click", () => {
    mainDiv.style.display = "none"
    thankYou.classList.remove("hidden")
  

    })

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
       selectedRating.innerHTML = rate.innerHTML
    })
}) 
