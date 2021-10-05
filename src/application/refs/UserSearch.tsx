import { ChangeEvent, FC, useState, useRef, useEffect } from 'react';

interface IUser {
  name: string;
  age: number;
}

type TUser = IUser | undefined;

// inputRef will have a null value initially and then it will be the type of the element it references in this case
type TInputRef = HTMLInputElement | null;

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 23 },
  { name: 'Michael', age: 30 },
];

const FocusedUserSearch: FC = () => {
  const inputRef = useRef<TInputRef>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<TUser>(undefined);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setName(value);
  };
  const handleClick = () => {
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase(),
    );
    setUser(foundUser);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      User Search with focus
      <input ref={inputRef} value={name} onChange={handleChange} />
      <button onClick={handleClick}>Find User</button>
      {user ? (
        <div>
          {user.name} {user.age}
        </div>
      ) : null}
    </>
  );
};

export default FocusedUserSearch;
