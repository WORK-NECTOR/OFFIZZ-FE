export type SortMethod = 'left' | 'center';
export interface TitleDescProps {
  title: string;
  desc: string;
  sort: SortMethod;
  titleSize?: string;
  descSize?: string;
}
