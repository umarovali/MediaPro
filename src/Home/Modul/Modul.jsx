import Title from "../../ui/Title";
import ModulItem from "./ModulItem";

export default function Modul() {
    return (
        <section className="modul">
            <div className="container">
                <Title><span>Kurs</span> modullari</Title>

                <ul className="modul_wrapper">
                    <ModulItem
                        num={1}
                        title={<>Instagram orqali <span>pul</span> ishlashning formulasi!</>}
                        suptitle1={<>Nega <span>Instagram</span> hozirda eng yaxshi savdo vositasi?</>}
                        suptitle2={<>3 bosqichli natijaviy model (<span>Kontent → Ishonch → Sotuv</span>)</>}
                    />
                    <ModulItem
                        num={2}
                        title={<><span>Bir kunda </span>auditoriya aniqlash!</>}
                        suptitle1={<>O‘z mijozingni topish uchun “Tez <span>Avatar</span> Metodi”</>}
                        suptitle2={<>Ishonchli va kerakli <span>mijozlarni</span> jalb qilish</>}
                    />
                    <ModulItem
                        num={3}
                        title={<>Tez natija beradigan <span>kontent</span> rejasi!</>}
                        suptitle1={<><span>4 kunlik</span> kontent yo‘li: Qanday qilib 1 haftada mijoz chiqara oladi? </>}
                        suptitle2={<>Reels + Story + 1 ta post = <span>Mikrovoronka</span></>}
                    />
                    <ModulItem
                        num={4}
                        title={<><span>Kamera</span> oldida o‘zingni sot!</>}
                        suptitle1={<>O‘zingni <span>ekspert</span> sifatida ko‘rsatish: tana, ovoz, ko‘z aloqa.</>}
                        suptitle2={<><span>3 ta </span>ishonch uyg‘otuvchi ssenariy.</>}
                    />
                    <ModulItem
                        num={5}
                        title={<><span>Instagram</span>’dagi pulli postlar sirasi!</>}
                        suptitle1={<>Reels bilan trafik olish, <span>CTA</span> bilan ishlash: nima deyish kerak?</>}
                        suptitle2={<>“<span>Sotuvchi post</span>” formulasini yozish</>}
                    />
                    <ModulItem
                        num={6}
                        title={<>Profilni <span>million dollarlik</span> qadoqlash!</>}
                        suptitle1={<><span>Profil bio</span>, vizual ko‘rinish, Highlights — 1 kunda tartibga keltirish.</>}
                        suptitle2={<>Profilingda “<span>ishonch signal</span>”lari!</>}
                    />
                    <ModulItem
                        num={7}
                        title={<>Savdoga chiqarish <span>strategiyasi</span>!</>}
                        suptitle1={<><span>Mini launch</span>: 5 kunlik kontent orqali kurs yoki mahsulot sotish.</>}
                        suptitle2={<>Savdodan oldingi “<span>issiq postlar</span>” tayyorlash.</>}
                    />
                </ul>
            </div>
        </section>
    )
}
