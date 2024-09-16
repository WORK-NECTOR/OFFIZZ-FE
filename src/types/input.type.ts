import { StoreApi, UseBoundStore } from 'zustand';

export interface InputProps {
  placeholder: string;
  setState: (target: string) => void;
}
