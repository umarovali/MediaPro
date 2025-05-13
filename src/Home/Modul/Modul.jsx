import { useEffect, useState } from "react";
import Title from "../../ui/Title";
import ModulItem from "./ModulItem";
import ViewAll from "../../ui/ViewAll";

export default function Modul() {
    const [viewAll, setViewAll] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setViewAll(false);
            } else {
                setViewAll(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleViewBlock = () => {
        setViewAll(prev => !prev);
    };

    return (
        <section className="modul">
            <div className="container">
                <Title><span>Kurs</span> modullari</Title>

                <ul className="modul_wrapper">
                    <ModulItem
                        num={1}
                        title={<>Instagram’da <span>pul</span> ishlashning soddalashgan yo‘li</>}
                        suptitle1={<>Nega aynan <span>Instagram</span> — marketing uchun eng zo‘r Instrument?</>}
                        suptitle2={<>3 qadamli savdo modeli: <span>kontent → ishonch → sotuv</span> (daromad)</>}
                        suptitle3={<>Yuzni ko’rsatmasdan <span>Halol</span> Blog yuritish</>}
                    />
                    <ModulItem
                        num={2}
                        title={<>Mijozingiz <span>kim</span> va qayerda sizni kuzatadi?</>}
                        suptitle1={<>Mijoz portretini <span>tez va oson</span> aniqlash usuli</>}
                        suptitle2={<>Aynan sizga kerakli <span>auditoriyani</span> topib, ularni jalb qilish</>}
                        suptitle3={<>Kontent orqali sotib oladigan <span>haridorni</span> qiziqtirish</>}
                    />
                    {viewAll && <>
                        <ModulItem
                            num={3}
                            title={<>Kontent <span>reja — haridor</span> olib keladigan kontent</>}
                            suptitle1={<>Qanday qilib <span>1 haftada</span> kontent orqali savdo boshlash mumkin?</>}
                            suptitle2={<>Reels, Storis, Post — <span>sotuvga olib</span> boruvchi asosiy qadamlar</>}
                            suptitle3={<>Ishonchni <span>yo’qotib olmaslik</span> uchun to’g’ri strategiya tuzish</>}
                        />
                        <ModulItem
                            num={4}
                            title={<><span>Kamera</span> bilan to’g’ri ishlash</>}
                            suptitle1={<>Videoda <span>ishonchli</span> ko‘rinish: tana tili, ovoz, ko‘z aloqa</>}
                            suptitle2={<><span>3 ta</span> ishonch beruvchi  ssenariy</>}
                            suptitle3={<>Aynan sizga yoki <span>brendingizga</span> ishonishi uchun qadamlar</>}
                        />
                        <ModulItem
                            num={5}
                            title={<>Reels + Sotuvchi <span>Post — savdo</span> olib keluvchi kontent</>}
                            suptitle1={<>Reels orqali mijoz <span>e’tiborini</span> jalb qilish</>}
                            suptitle2={<>Sotuvga olib <span>keluvchi</span> post formulasini tuzish</>}
                            suptitle3={<>To‘g‘ri taklif bilan <span>(CTA)</span> bilan xaridga undash</>}
                        />
                        <ModulItem
                            num={6}
                            title={<>Profilni <span>ishonchli brand</span> ko’rinishiga olib kelish</>}
                            suptitle1={<>Bio, <span>vizual ko‘rinish</span> va Highlights’ni professional ko‘rinishga keltirish</>}
                            suptitle2={<>Ishonchli <span>profil</span> tayyorlash</>}
                            suptitle3={<>Ishonch orqasidan <span>insonlarga</span> foyda bera olish</>}
                        />
                        <ModulItem
                            num={7}
                            title={<>Instagram’dagi <span>birinchi</span> sotuv</>}
                            suptitle1={<><span>5 kunlik</span> qadamlar bilan mahsulot/kurs sotish</>}
                            suptitle2={<>Savdoni boshlab beruvchi <span>“Kontent”ni</span> yozish</>}
                            suptitle3={<>Keyingi <span>strategik</span> qadamlar</>}
                        />
                    </>}
                </ul>

                <ViewAll onClick={handleViewBlock} />

            </div>
        </section>
    )
}
