import React from "react";

const Block_13 = () => {
    return(
        <div>
            <p>Забронируйте тур сейчас</p>
            <p>Комиссия за тур составит 100 рублей. Тур можно забронировать на гибкие даты и с бесплатной отменой.</p>
            <form action="#">
                <input type="email" placeholder="Почта" required/>
                <input type="text" placeholder="Ваше Имя"/>
                <input type="tel" placeholder="Номер телефона"/>
                <input type="text" placeholder="Комментарий"/>
            </form>
        </div>
    );
}
export default Block_13;