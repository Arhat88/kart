window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navi");
    if (window.scrollY > 30) {  
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navi-links');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector("#slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    // Select the first row of the table
    const firstRow = document.querySelector(".cart-table tbody tr");

    if (firstRow) {
        const priceCell = firstRow.children[1]; // 2nd column (Price)
        const qtyInput = firstRow.children[2].querySelector("input"); // 3rd column (Qty input)
        const totalSpan = firstRow.children[3].querySelector("span"); // 4th column (Total span)

        if (priceCell && qtyInput && totalSpan) {
            console.log("Initializing functionality for the first row:", {
                price: priceCell.textContent.trim(),
                input: qtyInput,
                total: totalSpan,
            });

            // Add event listener to the input field
            qtyInput.addEventListener("input", () => {
                const price = parseFloat(priceCell.textContent.trim()) || 0;
                const quantity = parseFloat(qtyInput.value) || 0;
                const total = price * quantity;

                console.log(`Price: ${price}, Quantity: ${quantity}, Total: ${total}`);
                totalSpan.textContent = total.toFixed(2); // Update total in the span
            });
        } else {
            console.error("Price cell, Qty input, or Total span not found in the first row.");
        }
    } else {
        console.error("First row not found in the table.");
    }
});
