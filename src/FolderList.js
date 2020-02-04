import React from 'react';

export default function FolderList(props) {
    const folderNames = props.store.folders.map(folder => {
        return <li>{folder.name}</li>
    })

    return (
        <div>
            <ul>
                {folderNames}
            </ul>

            <button>Add Folder</button>
        </div>
    )
}