
export default function InfoItem({ children, Icon }) {
    return (
        <li className='info_item'>
            <img src={Icon} alt="" />
            <p className='info_description'>{children}</p>
        </li>
    )
}
