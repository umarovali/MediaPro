import React from 'react'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
    return (
        <section className='experience'>
            <div className="experience_bg">
                <div className="container">
                    <ul className='experience_list'>
                        <ExperienceItem text={"X 10"}>
                            Savdoni <span>10 baravar</span> oshirish uchun kerak bo’ladigan kuchli amaliy bilimlar!
                        </ExperienceItem>
                        <ExperienceItem text={"7 Yil Biznesda"}>
                            <span>4 yillik</span> biznes va media tajribasini 1 oyda o'rganib, biznesda qo'llang!
                        </ExperienceItem>
                        <ExperienceItem text={"+ 100"}>
                            <span>Foydali materiallar,</span> Amaliy vazifalar va Videodarsliklar!
                        </ExperienceItem>
                    </ul>
                </div>
            </div>
        </section>
    )
}
