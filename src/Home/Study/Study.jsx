import Suptitle from "../../ui/Suptitle";
import Title from "../../ui/Title";
import StudyItem from "./StudyItem";

export default function Study() {
    return (
        <section className="study">
            <div className="container">
                <Title>Bu <span>kurs</span> sizga nimani o‘rgatadi?</Title>
                <Suptitle>Siz <span>bloger bo‘lishingiz shart emas.</span> Biz sizga qanday qilib <span>media</span> orqali savdo qilinadi — shuni bosqichma-bosqich o‘rgatamiz.</Suptitle>

                <ul className="study_list">
                    <StudyItem title={"Biz nimani o‘rgatamiz ?"} suptitle={"O‘zingizni ko‘rsatmasdan ham ishonchli va savdoga yo‘naltirilgan kontent yaratishni."} />
                    <StudyItem title={"Biz nimani o‘rgatamiz ?"} suptitle={"O‘zingizni ko‘rsatmasdan ham ishonchli va savdoga yo‘naltirilgan kontent yaratishni."} />
                    <StudyItem title={"Biz nimani o‘rgatamiz ?"} suptitle={"O‘zingizni ko‘rsatmasdan ham ishonchli va savdoga yo‘naltirilgan kontent yaratishni."} />
                    <StudyItem title={"Biz nimani o‘rgatamiz ?"} suptitle={"O‘zingizni ko‘rsatmasdan ham ishonchli va savdoga yo‘naltirilgan kontent yaratishni."} />
                </ul>
            </div>
        </section>
    )
}
