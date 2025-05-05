
export default function MediaBoostItem({ text, children }) {
    return (
        <li className='mediaboost_item'>
            <div className='mediaboost_number'>{text}</div>
            <p className='mediaboost_suptitle'>{children}</p>
        </li>
    )
}
