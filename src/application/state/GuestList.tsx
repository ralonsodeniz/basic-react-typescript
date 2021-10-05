import { ChangeEvent, FC, useState } from 'react';

const GuestList: FC = () => {
  // type of this useState could be inferred as string without being passes explicitly
  const [name, setName] = useState<string>('');
  // in the other hand this one should be typed to let ts know which kind of items are going to be in the array
  const [guests, setGuests] = useState<string[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };
  const handleClick = () => {
    setName('');
    setGuests((prevState) => [...prevState, name]);
  };

  return (
    <>
      <h3>Guest list</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={guest + index}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add Guest</button>
    </>
  );
};
export default GuestList;
