import { FC } from 'react';

interface ChildProps {
  color: string;
  onClick(): void; // onClick: () => void
}

// passing props types as prop object types. Downside: TS doesn't understand that we are defining a react component
// because of this TS wont know that Child could have defaultProps, propTypes, displayName or contextTypes properties
// with this approach we do not have native access to children prop, we would have to define it in the interface
export const Child = ({ color, onClick }: ChildProps) => (
  <div>
    {color}
    <button onClick={onClick}>Click Me</button>
  </div>
);

// taking this approach we tell TS this is going to be a react functional component that is going to have props of type ChildProps
export const ChildAsFC: FC<ChildProps> = ({ color, onClick, children }) => (
  <div>
    {color}
    {children}
    <button onClick={onClick}>Click Me</button>
  </div>
);
