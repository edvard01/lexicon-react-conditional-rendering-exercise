import { useState } from "react";

export function App() {
  //  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setTodoValue] = useState("Sleep 4 hours.");

  // if (isLoading) {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  const handleOnClick = () => {
    setIsEditing((preVal) => !preVal);
  };

  return (
    <>
      <h1>App Component is ready</h1>
      <p>- TODO -</p>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        ) : (
          <p>{todoValue}</p>
        )}
      </div>
      <button onClick={handleOnClick}>{isEditing ? "Cancel" : "Edit"}</button>
    </>
  );
}
