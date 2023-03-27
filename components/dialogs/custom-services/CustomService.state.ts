import { Reducer, useReducer } from 'react';

export interface StateField {
  value: string;
  success: boolean;
}

interface InitialState {
  username: StateField;
  email: StateField;
  request: StateField;
}

export interface ActionField<T = InitialState> {
  value: string;
  name: keyof T;
}

export interface ActionBlur<T = ActionField> {
  type: 'blur';
  field: T;
}

export interface ActionChange<T = ActionField> {
  type: 'change';
  field: T;
}

export interface DispatchEventOptions {
  type: 'blur' | 'change';
  fieldName: string;
  fieldValue: string;
}

const initialState: InitialState = {
  username: {
    value: '',
    success: false,
  },
  email: {
    value: '',
    success: false,
  },
  request: {
    value: '',
    success: false,
  },
};

const isSuccessField = (name: string, value: string) => {
  return name === 'email' ? !!value && value.includes('@') : !!value;
};

const reducer: Reducer<InitialState, ActionChange | ActionBlur> = (state, action) => {
  switch (action.type) {
    case 'blur': {
      const { field } = action;

      return {
        ...state,
        [field.name]: {
          ...state[field.name],
          success: isSuccessField(field.name, field.value),
        },
      };
    }

    case 'change': {
      const { field } = action;

      const newState = {
        ...state,
        [field.name]: {
          ...state[field.name],
          value: field.value,
          success: isSuccessField(field.name, field.value),
        },
      };

      return newState;
    }

    default:
      throw new Error();
  }
};

const useCustomServiceReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchEvent = (options: DispatchEventOptions): void => {
    dispatch({
      type: options.type,
      field: {
        name: options.fieldName as InitialStateKeys,
        value: options.fieldValue,
      },
    });
  };

  return {
    state,
    dispatch,
    dispatchEvent,
  };
};

export type InitialStateKeys = keyof InitialState;

export default useCustomServiceReducer;
