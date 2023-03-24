import { type FC, type FocusEvent, type ChangeEventHandler, useState } from 'react';

import MUITextField, { type TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'variant' | 'size' | 'error'> {
  placeholder?: string;
  error?: boolean;
  success?: boolean;
}

let fieldId = 0;

const TextField: FC<TextFieldProps> = props => {
  const { onChange, onBlur, name, id, required, type, value, success, ...restProps } = props;
  const [classStatus, setClassStatus] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (onChange) {
      onChange(event);
    }

    if (success) {
      setClassStatus('text-success');
    } else {
      setClassStatus('text-error');
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    if (success) {
      setClassStatus('text-filled');
    } else {
      setClassStatus('text-error');
    }
  };

  return (
    <MUITextField
      {...restProps}
      variant="outlined"
      type={type || 'text'}
      value={value}
      required={required || false}
      onChange={handleChange}
      onBlur={handleBlur}
      id={id || `textField${fieldId++}`}
      name={name || `text-field-${fieldId}`}
      classes={{ root: classStatus }}
    />
  );
};

export default TextField;
