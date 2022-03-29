import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

interface IState {
  input: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState<IState['input']>({
    name: '',
    age: 0,
    url: '',
    note: '',
  });

  const getInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        url: input.url,
        note: input.note,
      },
    ]);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30rem',
        margin: '5rem auto',
      }}
    >
      <input
        type='text'
        placeholder='Name...'
        name='name'
        className='AddToList-input'
        value={input.name}
        onChange={getInput}
      />
      <input
        type='number'
        placeholder='Age...'
        name='age'
        className='AddToList-input'
        value={input.age}
        onChange={getInput}
      />
      <input
        type='text'
        placeholder='image URL...'
        name='url'
        className='AddToList-input'
        value={input.url}
        onChange={getInput}
      />
      <textarea
        placeholder='Note...'
        name='note'
        className='AddToList-input'
        value={input.note}
        onChange={getInput}
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
