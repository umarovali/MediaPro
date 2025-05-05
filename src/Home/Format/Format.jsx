import FormatFoto from "../../assets/images/format_foto.png";
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
                    <img src={FormatFoto} alt="" />

                    <ul className="format_list">
                        <FormatItem Icon={Icon1} text={"7 - 10 daqiqalik aniq, qisqa, lekin chuqur videodars."}>1. <span>10</span> ta videodars</FormatItem>
                        <FormatItem Icon={Icon2} text={"Har bir modulda real topshiriq (yo‘ldan chiquvchilardan ajratib turadi)."}>2. <span>Real</span> topshiriqlar</FormatItem>
                        <FormatItem Icon={Icon3} text={"(1-ta boshlanishida, 1-ta savdo moduli oxirida, 1-ta yakuniy natija bo‘yicha)."}>3. <span>3</span> ta Zoom sessiya</FormatItem>
                        <FormatItem Icon={Icon4} text={"Instagram post & reels shablonlari."}>4. <span>Bonus</span></FormatItem>
                    </ul>
                </div>
            </div>
        </section>
    )
}
