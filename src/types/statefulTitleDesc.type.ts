export type TextState = 'active' | 'inactive';

export interface StatefulTitleDescProps {
  title: string;
  desc: string;
  state: TextState;
}
