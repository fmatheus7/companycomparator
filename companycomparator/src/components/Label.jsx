import React from 'react'

export default function Label(props) {
    return (
        <div className="label">
            <label for={props.for}>{props.for}</label>
        </div>
    )
}
