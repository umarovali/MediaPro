
export default function StudyItem({ title, suptitle }) {
    return (
        <li className="study_item">
            <div className="study_question">?</div>
            <h3 className="study_title">{title}</h3>
            <p className="study_suptitle">{suptitle}</p>
        </li>
    )
}
