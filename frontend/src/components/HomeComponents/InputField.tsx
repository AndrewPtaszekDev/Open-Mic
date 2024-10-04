import './InputField.css';
import React from 'react';

interface InputFieldProps {
    fieldPrompt: string;
    setFieldContent: React.Dispatch<any>;
}

const InputField: React.FC<InputFieldProps> = ({ fieldPrompt, setFieldContent }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldContent(e.target.value);
  };

  return (
      <div className="input-field-container"> {/* Flex container */}
          <div className='input-field-prompt'>{fieldPrompt}</div>
          <input className='input-field' onChange={handleChange}/>
      </div>
  );
};

export default InputField;
