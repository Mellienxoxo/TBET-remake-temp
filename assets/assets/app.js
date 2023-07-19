
const cards = document.querySelectorAll(".card")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //if(entry.isIntersecting) observer.unobserve(entry.target)
    })   
},
   {
    //threshold: 0.9,
    //root: 
    //rootMargin: "100px",
    
   }
)

cards.forEach(card => {
    observer.observe(card)
})
