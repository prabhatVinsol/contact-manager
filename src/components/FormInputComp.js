import React from 'react';

function FormInputComp(props) {
  const {
    field, value, handleChange, isEmptyError,
  } = props;
  const handleInputChange = (e) => {
    handleChange(field, e.target.value);
  };
  return (
    <div className="InputContainer">
      <div>{field}</div>
      <div>
        <input
          type="text"
          placeholder={`Your ${field}`}
          value={value}
          onChange={handleInputChange}
        />
        {isEmptyError && (
          <p className="p">
            {field}
            {' '}
            is empty
          </p>
        )}
      </div>
    </div>
  );
}

export default FormInputComp;
