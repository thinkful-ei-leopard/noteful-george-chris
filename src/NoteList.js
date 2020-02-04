import React from 'react';

export default function NoteList(props) {
    const noteNames = props.store.notes.map(note => {
        return <li>{note.name}</li>
    })

    return (
        <div>
            <ul>
                {noteNames}
            </ul>

            <button>Add Note</button>
        </div>
    )
}