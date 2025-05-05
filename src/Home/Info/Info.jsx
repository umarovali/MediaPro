import InfoItem from "./InfoItem";
// img
import InfoIcon1 from "../../assets/images/info/info_1.png";
import InfoIcon2 from "../../assets/images/info/info_2.png";
import InfoIcon3 from "../../assets/images/info/info_3.png";

export default function Info() {
    return (
        <section className="info">
            <div className="container">
                <ul className="info_wrapper">
                    <InfoItem Icon={InfoIcon1}>O‘z biznesini <span>ijtimoiy tarmoqlarda</span> rivojlantirmoqchi bo‘lgan tadbirkorlar uchun!</InfoItem>
                    <div className="info_line"></div>
                    <InfoItem Icon={InfoIcon2}><span>Instagram</span>’da savdoni boshlamoqchi bo‘lgan yangi foydalanuvchilar uchun!</InfoItem>
                    <div className="info_line"></div>
                    <InfoItem Icon={InfoIcon3}><span>SMM</span>’ga kirayotgan yoki ko‘proq mijoz topmoqchi bo‘lgan mutaxassislar uchun!</InfoItem>
                </ul>
            </div>
        </section>
    )
}
