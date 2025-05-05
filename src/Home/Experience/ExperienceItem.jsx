
export default function ExperienceItem({ text, children }) {
    return (
        <li className='experience_item'>
            <h2 className='experience_title'>{text}</h2>
            <p className='experience_suptitle'>{children}</p>
        </li>
    )
}
