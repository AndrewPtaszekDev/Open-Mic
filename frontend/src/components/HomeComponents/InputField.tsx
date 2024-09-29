import './InputField.css';
import React, {useState} from 'react';

interface InputFieldProps {
    fieldPrompt: string; // 'to' prop for navigation
    setFieldContent: React.Dispatch<any>;
}

const InputField: React.FC<InputFieldProps> = ({ fieldPrompt, setFieldContent }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldContent(e.target.value); // Extract the value from the event and update the state
  };

  return (
      <div>
          <div className='input-field-prompt'>{fieldPrompt}</div>
          <input className='input-field' onChange={handleChange}/>
      </div>
  );
};

export default InputField;
