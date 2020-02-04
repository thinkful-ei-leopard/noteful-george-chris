import React from 'react';
import Header from './Header'
import FolderList from './FolderList'
import NoteList from './NoteList'

class App extends React.Component {
  render (){
    return (
      <main className='App'>
        <Header />
        <FolderList />
        <NoteList />
      </main>
    );
  }
}

export default App;