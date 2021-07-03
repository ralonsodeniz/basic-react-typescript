import {ChangeEvent, DragEvent, FC} from 'react';

const EventComponent: FC = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>
        Drag Me
      </div>
    </>
  );
};

export default EventComponent;
