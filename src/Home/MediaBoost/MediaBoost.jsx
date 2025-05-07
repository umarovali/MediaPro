import React, { useEffect, useState } from 'react'
import Title from '../../ui/Title'
import Suptitle from '../../ui/Suptitle'
import MediaBoostItem from './MediaBoostItem'
import ViewAll from '../../ui/ViewAll';

export default function MediaBoost() {
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
        <section className='mediaboost'>
            <div className="container">
                <Title><span>MEDIA BOOST PRO</span> kimlar uchun?</Title>
                <Suptitle><span>Instagram</span>’da nafaqat post joylash, balki savdo qilishni o‘rganmoqchimisiz? Unda bu kurs aynan siz uchun!</Suptitle>

                <ul className='mediaboost_list'>
                    <MediaBoostItem text={1}><span>Tadbirkorlar — </span>  mahsulot yoki xizmatini Instagram orqali ko‘proq odamlarga yetkazib, savdosini 10 barobar oshirmoqchi bo‘lganlar uchun.</MediaBoostItem>
                    <MediaBoostItem text={2}><span>SMM mutaxassislari — </span> oddiy kontent emas, natija beradigan strategiyalar orqali mijozlarga haqiqiy qiymat yaratmoqchi bo‘lganlar uchun.</MediaBoostItem>
                    {viewAll && <>
                        <MediaBoostItem text={3}><span>Yangi boshlayotganlar —</span> Instagram olamiga endi kirayotgan, qanday boshlashni bilmayotgan, lekin o‘rganib pul ishlamoqchi bo‘lganlar uchun.</MediaBoostItem>
                        <MediaBoostItem text={4}><span>Shaxsiy brend yaratmoqchi bo‘lganlar —</span> o‘z ismi bilan tanilish, auditoriya yig‘ish va kuchli ishonch shakllantirishni xohlovchilar uchun.</MediaBoostItem>
                        <MediaBoostItem text={5}><span>Bloger bo‘lmagan, mahsulotini internetda sotmoqchi bo‘lganlar — yuzini </span> ko‘rsatmasdan blog yuritish, va savdo qilishni o‘rganmoqchilar uchun.</MediaBoostItem>
                    </>}
                </ul>

                <ViewAll onClick={handleViewBlock} />
            </div>
        </section>
    )
}
