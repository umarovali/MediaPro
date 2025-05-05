
export default function ModulItem({ num, title, suptitle1, suptitle2 }) {
    return (
        <li className='modul_item'>
            <div className='modul_number'>{num}</div>
            <ul className="modul_doteds">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p className="modul_text">{num} Modul</p>
            <h5 className='modul_title'>{title}</h5>
            <p className='modul_suptitle'>{suptitle1}</p>
            <p className='modul_suptitle'>{suptitle2}</p>
        </li>
    )
}
