import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  // const [number, setNumber] = useState<number | string>(5);


  // const changeNumber = () => {
  //   setNumber('10');
  // }

  const [people, setPeople] = useState<IState['people']>([{
    name:'typescript',
    age:23,
    url:'https://avatars.githubusercontent.com/u/12220208?v=4',
    note:'me learn, me go boom'
  }]);
  const renderList = (): JSX.Element [] => {
    return people.map((person) => <List name={person.name} age={person.age} note={person.note} url={person.url}/>)
  };
  return (
    <div className="App">
      <h1>Invite people</h1>
      <ul>
      {renderList()}
      </ul>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
