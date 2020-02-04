import React from 'react';

export default function NoteList(props) {
    const filteredNotes = props.store.notes.filter(note => {
        return note.folderId === "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1"
        }
    )

    const displayFilteredNotes = filteredNotes.map(note => {
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
                {displayFilteredNotes}
            </ul>

            <button>Add Note</button>
        </div>
    )
}