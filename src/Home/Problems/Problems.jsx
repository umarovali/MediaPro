import Title from "../../ui/Title";
import ProblemsItem from "./ProblemsItem";

export default function Problems() {
    return (
        <section className="problems">
            <div className="container">
                <Title>Sizda shunday <span>muammolar</span> bormi?</Title>

                <ul className="problems_wrapper">
                    <ProblemsItem title={"Instagram yuritishni xohlaysiz, lekin qayerdan boshlashni bilmaysizmi?"}  description={"Sizga aniq va samarali kontent strategiyani beramiz. 4 kunlik mini-reja bilan 1-haftadanoq natija ko‘rasiz."} />
                    <ProblemsItem title={"Video va postlar tayyorlaysiz, lekin hech kim e’tibor bermayaptimi?"} description={"Sotuvchi kontent ssenariylarini o‘rgatamiz. Postni ochgan odam aynan sizning mahsulotingizni xohlab qoladi."} />
                    <ProblemsItem title={"Profilingizga kirgan odamlar chiqib ketmoqda, ishonchsiz ko‘rinayapsizmi?"} description={"Instagram profilingizni professional darajada qadoqlaymiz. Bio, profil rasmi, highlights — hammasi sizni ekspert sifatida ko‘rsatadi."} />
                    <ProblemsItem title={"Kamera oldida gapira olmaysiz, o‘zingizga ishonchingiz yo‘qmi?"} description={"Oddiy, hayotiy ssenariylar orqali sizni kamera oldida erkin va tabiiy gapiradigan darajagacha olib chiqamiz."} />
                    <ProblemsItem title={"Kurslar o‘qigansiz, lekin baribir savdo qilolmayapsizmi?"} description={"Kurs davomida sizga real topshiriqlar beramiz, feedback’lar va qo‘shimcha Zoom darslar bilan haqiqiy natijaga olib chiqamiz."} />
                    <ProblemsItem title={"Sizda mahsulot bor, lekin uni qanday sotishni bilmaysizmi?"} description={"Siz uchun ishlaydigan mini-launch strategiyasini o‘rgatamiz. 5 kunlik kontent orqali mahsulotingizni sotishga olib chiqamiz."} />
                </ul>
            </div>
        </section>
    )
}
