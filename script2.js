window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navi");
    if (window.scrollY > 30) {  // If scrolled more than 50px
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
                totalSpan.textContent = `${total.toFixed(2)}`; // Update total in the span
            });
        } else {
            console.error("Price cell, Qty input, or Total span not found in the first row.");
        }
    } else {
        console.error("First row not found in the table.");
    }
});