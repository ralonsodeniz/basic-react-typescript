import { ChangeEventHandler, DragEvent, FC} from 'react';

const EventComponent: FC = () => {
    // we can define the type of the event handler
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event);
  };
  // or the type of the event
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
