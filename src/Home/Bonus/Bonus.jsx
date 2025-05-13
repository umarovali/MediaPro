import React from 'react'
import Title from '../../ui/Title'
import Suptitle from '../../ui/Suptitle'

export default function Bonus() {
    return (
        <section className='bonus'>
            <div className="container">
                <Title><span>BONUS</span> BLOKLAR</Title>
                <ul className="bonus_content">
                    <li className="bonus_content_item">
                        <h3 className="bonus_content_item_title">
                            Qo‘shimcha <span>natijalar</span> uchun
                        </h3>

                        <ul className="doteds">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="bonus_content_item_text_two">
                            <li>Tayyor Instagram <span>shablonlar</span> (post, reels, bio)</li>
                            <li>Montaj uchun <span>100+</span> instrumentlar</li>
                            <li>ChatGPT yordamida <span>kontent</span> yozish darsligi</li>
                            <li>Podkast videolar va <span>foydali</span> kanallar ro’yhati</li>
                        </ul>
                    </li>
                    <li className="bonus_content_item">
                        <h3 className="bonus_content_item_title">
                            Qo‘shimcha <span>natijalar</span> uchun
                        </h3>

                        <ul className="doteds">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className="bonus_content_item_text_two">
                            <li>Qiziqarli va ishonchli kontent yaratish uchun <span>shablon videola</span>r to’plami.</li>
                            <li>Hamfikrlar uchun <span>alohida</span> guruh</li>
                            <li><span>Ayollar uchun</span> alohida fikr almashish guruh</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}
