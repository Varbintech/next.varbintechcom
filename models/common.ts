import type { ReactNode } from 'react';

export interface ReactChildren {
  children: ReactNode;
}

export type EmptyFunction<T = void> = () => T;
export type FunctionWithArg<T, P = void> = (value: T) => P;

export type JSXElement = JSX.Element;

export type HeaderElement<T = EmptyFunction, P = JSXElement> = FunctionWithArg<T, P>;
export type FooterElement<T = FooterProps, P = JSXElement> = FunctionWithArg<T, P>;

export interface FooterProps {
  onConfirm: EmptyFunction;
  isDisabled?: boolean;
  onClose?: EmptyFunction;
}

export type PlanType = 'MONTH' | 'QUARTER' | 'YEAR';
