import FormatFoto from "../../assets/images/foto_format.png";
import Suptitle from "../../ui/Suptitle";
import Title from "../../ui/Title";
import Icon1 from "../../assets/images/format_icons/format_icon_1.svg";
import Icon2 from "../../assets/images/format_icons/format_icon_2.svg";
import Icon3 from "../../assets/images/format_icons/format_icon_3.svg";
import Icon4 from "../../assets/images/format_icons/format_icon_4.svg";
import FormatItem from "./FormatItem";

export default function Format() {
    return (
        <section className='format'>
            <div className="container">
                <Title>MEDIA BOOST PRO</Title>
                <Suptitle><span>Kurs</span> formati</Suptitle>
                <div className="format_wrapper">
                    <img className="format_foto" src={FormatFoto} alt="" />

                    <ul className="format_list">
                        <FormatItem Icon={Icon1} text={"7 ta modul, 25 dan oshiq 7-10 daqiqalik aniq, qisqa, lekin chuqur tushuntirilgan videodarsliklar."}>1. <span>25</span> + Videodarslar</FormatItem>
                        <FormatItem Icon={Icon2} text={"Har bir darsdan keyin amaliy vazifalar beriladi va buni bajarishda Kurator sizga yordam berib boradi."}>2. <span>Kurator</span> nazorati</FormatItem>
                        <FormatItem Icon={Icon3} text={"(1-ta boshlanishida, 1-ta savdo moduli oxirida, 1-ta yakuniy natija bo‘yicha)."}>3. <span>Zoom</span> Darslar</FormatItem>
                        <FormatItem Icon={Icon4} text={"Video syomkasi va montaj qilish uchun juda ko’p foydali materiallar. Shablonlar va Chek listlar."}>4. <span>Bonus</span> materiallar</FormatItem>
                    </ul>
                </div>
            </div>
        </section>
    )
}
