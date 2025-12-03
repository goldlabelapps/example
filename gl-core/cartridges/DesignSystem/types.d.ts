// /Users/goldlabel/GitHub/core/gl-core/cartridges/DesignSystem/types.d.ts
import { TIconShape } from './components/Icon';

export interface TDesignSystemState {
  cartridge?: string;
  dialog?: any;
  theme?: TTheme;
  feedback?: TFeedback;
  feedbackTested?: boolean;
  fullScreen?: boolean;
  loading?: boolean;
  [key: string]: any;
}

export type TFlatItem = {
  title: string;
  slug: string;
  description?: string;
};

export type TSearch = {
  onTrigger?: (value: any) => void;
  defaultValue?: string;
};

export type NavItem = {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  order?: number;
  children?: NavItem[];
};

export interface IDesignSystem {
  theme?: TTheme;
  children: React.ReactNode;
}

export type TFeedback = {
  severity?: TSeverity;
  title?: string;
  description?: string;
} | null;

export type TSeverity = 'success' | 'info' | 'warning' | 'error';

export type TIcon = TIconShape;

export type TTheme = {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
  background: string;
  paper: string;
  text: string;
  border: string;
};
