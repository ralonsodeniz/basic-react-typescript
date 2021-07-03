import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log('clicked')} />
      <ChildAsFC color={'blue'} onClick={() => console.log('clicked')}>
        Children of ChildAsFC
      </ChildAsFC>
    </>
  );
};

export default Parent;
