import React from 'react'

export default function AboutItem({ Icon, title, suptitle, description }) {
    return (
        <li className="about_item">
            <img src={Icon} alt="" />
            <h3 className="about_item_title">{title}</h3>
            <p className="about_item_suptitle">{suptitle}</p>
            <p className="about_item_description">{description}</p>
        </li>
    )
}
