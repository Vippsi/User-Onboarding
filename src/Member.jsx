import React from 'react'

export default function Member(props) {
    const { info } = props

    if(!info) {
        return <h1>No info provided</h1>
    }

    return (
        <div>
        <h2>{info.name}</h2>
        <p>{info.email}</p>
        <p>{info.role}</p>

        </div>
    )
}