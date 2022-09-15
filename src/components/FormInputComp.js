import React from 'react';

function FormInputComp(props) {
  const { fieldName, fieldValue } = props;
  const handleInputChange = () => {

  };
  return (
    <div>
      {fieldName}
      <input type="text" placeholder={`Your ${fieldName}`} value={fieldValue} onChange={handleInputChange} />
    </div>
  );
}

export default FormInputComp;
