document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let total = 0;
        const items = cart.getElementsByClassName('cart-item');
        for (let item of items) {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.getElementsByClassName('quantity')[0].innerText);
            total += price * quantity;
        }
        totalPriceElement.innerText = total.toFixed(2);
    }

    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('increase')) {
            const quantityElement = event.target.previousElementSibling;
            quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
        }
    