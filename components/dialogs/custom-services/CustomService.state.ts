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

const reducer: Reducer<InitialState, ActionChange | ActionBlur> = (state, action) => {
  switch (action.type) {
    case 'blur': {
      const { field } = action;

      return {
        ...state,
        [field.name]: {
          ...state[field.name],
          success: field.name === 'email' ? !!field.value && field.value.includes('@') : !!field.value,
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
          success: field.name === 'email' ? !!field.value && field.value.includes('@') : !!field.value,
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
