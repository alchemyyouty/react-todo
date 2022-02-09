import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="area input-area">
      <input
        disabled={disabled}
        className="input-area_input"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} className="default_button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
