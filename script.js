const TRPics = document.querySelector(".TRPics");
const  Prev= document.getElementById("buttonLeft");
const  Next= document.getElementById("buttonRight");

//if scrolled, the image carousels
TRPics.addEventListener("wheel", (e) => {
    e.preventDefault();
    TRPics.scrollLeft += e.deltaY
});

Next.addEventListener("click",() =>
{
    TRPics.scrollLeft += 1150;
})

Prev.addEventListener("click", () =>{
    TRPics.scrollLeft -= 1150;
})