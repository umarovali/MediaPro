
export default function FormatItem({ Icon, text, children  }) {
    return (
        <li className="format_item">
            <div className="format_box"><img src={Icon} alt="" /></div>
            <h4 className="format_title">{children }</h4>
            <p className="format_suptitle">{text}</p>
        </li>
    )
}
