import Foto from "../../assets/images/hero_foto.png";

export default function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <h2 className='hero_title'>
                            1 Oylik Biznesni Media orqali rivojlantirish kursi
                        </h2>
                        <p className='hero_suptitle'>
                            Biznesini brend darajasiga olib chiqmoqchi va savdosini media orqali x10 baravarga oshirmoqchi bo’lgan Biznesmenlar, Kasb egalari va mutahasislar uchun mahsus kurs!
                        </p>
                        <button className='hero_btn'>Royhatdan otish!</button>
                    </div>

                    <img src={Foto} alt="" />
                </div>
            </div>
        </section>
    )
}
