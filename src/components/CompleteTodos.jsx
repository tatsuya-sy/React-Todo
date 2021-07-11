import React from "react";

export const CompleteTodos = (props) => {
  const { todo, onClickBack } = props;

  return (
    <div className="complete">
      <h2>完了したToDo</h2>
      <ul className="list">
        {todo.map((todo, index) => {
          return (
            <li key="todo">
              <div>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
