import React from 'react';
import Header from './Header'
import FolderList from './FolderList'
import NoteList from './NoteList'
import {STORE} from './dummy-store'

class App extends React.Component {
  render (){
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <nav>
          <FolderList store={STORE}/>
        </nav>
        <main>
          <NoteList store={STORE}/>
        </main>  
      </div>
    );
  }
}

export default App;