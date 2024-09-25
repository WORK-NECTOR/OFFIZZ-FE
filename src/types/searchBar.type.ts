export interface SearchBarProps {
  width: string;
  height: string;
  focusContent?: React.ReactNode;
  focusColor?: string;
  placeholder?: string;
  searchBarType?: 'visit' | 'place';
}
