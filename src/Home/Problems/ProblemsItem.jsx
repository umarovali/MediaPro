import React from 'react'

export default function ProblemsItem({ title, description }) {
    return (
        <li className="problems_item">
            <div className="problems_question">?</div>
            <h4 className="problems_title">{title}</h4>
            <p className="problems_suptitle">Biz nima qilamiz ?</p>
            <p className="problems_description">{description}</p>
        </li>
    )
}
