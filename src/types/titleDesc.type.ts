export type SortMethod = 'left' | 'center';
export type SortType = 'recap';
export interface TitleDescProps {
  title: string;
  desc: string;
  sort?: SortMethod;
  type?:SortType;
}
