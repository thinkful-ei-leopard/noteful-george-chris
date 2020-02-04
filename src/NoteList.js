import React from 'react';

export default function NoteList(props) {
    const noteNames = props.store.notes.map(note => {
        return (
            <li>
                <h2>{note.name}</h2>
                <p>Date modified on {note.modified}</p>
                <button>Delete Note</button>
            </li>
        )
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