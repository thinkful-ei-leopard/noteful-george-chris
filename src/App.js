import React from 'react';
import Header from './Header'
import FolderList from './FolderList'
import NoteList from './NoteList'
import {STORE} from './dummy-store'
import {Route} from 'react-router-dom'

class App extends React.Component {
  state = {
    folderID: "",
    noteID: ""
  }

  render (){
    return (
      <div className='App'>
        <header>
          <Route path="/" component={Header} />
        </header>
        <sidebar>
          <Route 
            path="/"
            render={() => <FolderList store={STORE}/>}
          />
        </sidebar>
        <main>
        <Route 
            path="/"
            render={() => <NoteList store={STORE}/>}
          />
        </main>  
      </div>
    );
  }
}

export default App;