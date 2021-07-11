import React from "react";

export const IncompleteTodos = (props) => {
  const { todo, onClickDelete, onClickComplete } = props;

  return (
    <div className="incomplete">
      <h2>未完了のToDo</h2>
      <ul className="list">
        {todo.map((todo, index) => {
          return (
            <li key={todo}>
              <div>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
