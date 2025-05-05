import Suptitle from "../../ui/Suptitle";
import Title from "../../ui/Title";
import Elmakon from "../../assets/images/elmakon.png";
import WB from "../../assets/images/wb.png";
import Active from "../../assets/images/active.png";
import AboutItem from "./AboutItem";

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <Title>Sahib Ahmatov - O’zi <span>kim?</span> </Title>
                <Suptitle>Tadbirkor - <span> Active Wildberries </span> va <span>Active Media</span> brendlari asoschisi!</Suptitle>
                <ul className="about_content">
                    <li className="about_content_item">
                        <h3 className="about_content_item_title">
                            <span> Idealno, Rework, Focus</span> o’quv markazlari asoschisi
                        </h3>

                        <ul className="doteds">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="about_content_item_text_one">
                            <li>1000+ <span> Ilm olganlar</span></li>
                            <li>30+ <span>hodim</span></li>
                            <li>3000+ <span>Bepul talim olganlar</span></li>
                            <li>2020-2025</li>
                        </ul>
                    </li>
                    <li className="about_content_item">
                        <h3 className="about_content_item_title">
                            <span>FastFood</span> restoranlar
                        </h3>

                        <ul className="doteds">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="about_content_item_text_two">
                            <li>1000+ <span> Ilm olganlar</span></li>
                            <li>3000+ <span>Bepul talim olganlar</span></li>
                            <li>30+ <span>hodim</span></li>
                        </ul>
                    </li>
                </ul>

                <ul className="about_wrapper">
                  <AboutItem Icon={Elmakon} title={"O’zbekistondagi yirik elektronika savdo do’konlari bilan hamkorlikda!"} suptitle={"Mahsulotlarni Uzum market, Zoodmall va shu kabi marketplacelarda savdosini yo’lga qo’yishda hamkorlik qilgan!"} />
                  <AboutItem Icon={WB} title={"Wildberries da savdo va Boshqalarni Ham savdo qilishga o’rgatib kelmoqda!"} suptitle={"2023-2025 (Davom etmoqda) 300+ o’quvchi"} description={"O’zbekistondagi yirik ishlab chiqarish fabrikalari bilan hamkorlikda, Mahsulotlarni Wildberries orqali NDH davlatlariga sotishda hamkorlik qiladi!"} />
                  <AboutItem Icon={Active} title={"Marketplacelar bo’yicha Treninglar va Online darslar yo’lga qo’ygan!"} suptitle={"700+ Eshituvchilar soni 50 000$ + Online orqali savdo 2023-2025 (Davom etmoqda)"} description={"Qirg’iziston va O’zbekistonlik tadbirkorlarga Bizneslarini internet orqali rivojlantirishga yordam berib keladi!"} />
                </ul>
            </div>
        </section>
    )
}
