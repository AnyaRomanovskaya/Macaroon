'use strict';

let loader = $('.loader');

$('#submit').click(function () {
    let product = $('#order-product');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;

    $('.error-input').hide();
    product.css('border-color', '#9b3f50');
    name.css('border-color', '#9b3f50');
    phone.css('border-color', '#9b3f50');

    if (!product.val()) {
        product.next().show();
        product.css('border-color', '#dc0709');
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', '#dc0709');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', '#dc0709');
        hasError = true;
    }


    if (!hasError) { //если нет ошибки выполним ajax запрос
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {product: product.val(), name: name.val(), phone: phone.val()}
        })
            //далее - надо обработать рез-ат нашего запроса
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                $('.order__form').hide();
                $('.order__success').show();
                $('.order__image').css('bottom', '-200px');
                } else {
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                }
                console.log(msg);
            });
    }
})

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})