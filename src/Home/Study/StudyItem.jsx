
export default function StudyItem({ children, suptitle }) {
    return (
        <li className="study_item">
            <div className="study_question">?</div>
            <h3 className="study_title">{children}</h3>
            <p className="study_suptitle">{suptitle}</p>
        </li>
    )
}
