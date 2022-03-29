import React from 'react';

interface IProps {
    name: string,
    age: number,
    url: string,
    note?: string
}

const List: React.FC<IProps> = ({ name, age, url, note}) => {
  return (
    <li className="List">
        <div className="List-header">
          <img src={url} alt="" className="List-img" />
          <h2>{name}</h2>
        </div>
        <p>{age} years old</p>
        <p className="List-note">{note}</p>
    </li>
  )
}

export default List