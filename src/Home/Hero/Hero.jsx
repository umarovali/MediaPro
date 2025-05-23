import Foto from "../../assets/images/hero_foto.png";
import fotoZamena from '../../assets/images/hero_foto_copy.png'

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
                        <button className='hero_btn' onClick={() => {
                            document.getElementById("connect").scrollIntoView({ behavior: "smooth" });
                        }}>
                            Royhatdan otish!
                        </button>
                    </div>
                    <picture>
                        <source srcset={fotoZamena} media="(max-width: 750px)" />
                        <img src={Foto} alt="" />
                    </picture>
                </div>
            </div>
        </section>
    )
}
