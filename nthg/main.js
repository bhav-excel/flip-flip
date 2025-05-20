// Reference to DOM Elements
const prevBTn = document.querySelector("#left-btn");
const nextBTn = document.querySelector("#right-btn");
const book = document.querySelector("#book");

const page1 = document.querySelector("#p1");
const page2 = document.querySelector("#p2");
const page3 = document.querySelector("#p3");
const page4 = document.querySelector("#p4");
const page5 = document.querySelector("#p5");
const page6 = document.querySelector("#p6");
const page7 = document.querySelector("#p7");

// Event Listner
prevBTn.addEventListener("click",goPrevPage);
nextBTn.addEventListener("click",goNextPage);
// Business Logic
let currloc= 1;
let numOfppr=7;
let maxLoc= numOfppr+1;
function openbook(){
    book.style.transform = "translateX(50%)";
    prevBTn.style.transform = "translateX(-250px)";
    nextBTn.style.transform = "translateX(250px)";

}
function closebook(isAtBegining){
    if(isAtBegining){
        book.style.transform = "translateX(0%)";
        
    }
    else{
        book.style.transform = "translateX(100%)";

    }
    prevBTn.style.transform = "translateX(0px)";
    nextBTn.style.transform = "translateX(0px)";
}
function goNextPage() {
    if (currloc < maxLoc) {
        switch (currloc) {
            case 1:
                openbook();
                page1.classList.add("flipped");
                page1.style.zIndex = 1;
                break;
            case 2:
                page2.classList.add("flipped");
                page2.style.zIndex = 2;
                break;
            case 3:
                page3.classList.add("flipped");
                page3.style.zIndex = 3;
                break;
            case 4:
                page4.classList.add("flipped");
                page4.style.zIndex = 4;
                break;
            case 5:
                page5.classList.add("flipped");
                page5.style.zIndex = 5;
                break;
            case 6:
                page6.classList.add("flipped");
                page6.style.zIndex = 6;
                break;
            case 7:
                page7.classList.add("flipped");
                page7.style.zIndex = 7;
                closebook();
                break;
            default:
                throw new Error("Unknown state in goNextPage()");
        }
        currloc++;
    }
}


function goPrevPage() {
    if (currloc > 1) {
        switch (currloc) {
            case 2:
                closebook(true);
                page1.classList.remove("flipped");
                page1.style.zIndex = 7;
                break;
            case 3:
                page2.classList.remove("flipped");
                page2.style.zIndex = 6;
                break;
            case 4:
                page3.classList.remove("flipped");
                page3.style.zIndex = 5;
                break;
            case 5:
                page4.classList.remove("flipped");
                page4.style.zIndex = 4;
                break;
            case 6:
                page5.classList.remove("flipped");
                page5.style.zIndex = 3;
                break;
            case 7:
                page6.classList.remove("flipped");
                page6.style.zIndex = 2;
                break;
            case 8:
                openbook();
                page7.classList.remove("flipped");
                page7.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state in goPrevPage()");
        }
        currloc--;
    }
}
