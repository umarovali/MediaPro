import StudyItem from "./StudyItem";

export default function Study() {
    return (
        <section className="study">
            <div className="container">
                <ul className="study_list">
                    <StudyItem suptitle={"Reklamaga katta summalar harajat qilmasdan, savdoyingizni 10x ga oshira olasiz!"}>
                        Nega <span>media</span> sizga kerak!?
                    </StudyItem>
                    <StudyItem suptitle={"Media orqali brendingizni mashhur qilishni, Ishonch qozonishni, Savdolaringiz 10x oshirishni!"}>
                        <span>Kursda</span> nimalar o’rgatamiz?
                    </StudyItem>
                </ul>
            </div>
        </section>
    )
}
