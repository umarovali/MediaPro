import React from 'react'

export default function ViewAll({ onClick }) {
    return (
        <div className='view_all'>
            <button className='view_all_btn' onClick={onClick}>Hammasini ko'rish!</button>
        </div>
    )
}
