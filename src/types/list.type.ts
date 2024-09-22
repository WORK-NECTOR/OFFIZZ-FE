import { IconTitleProps } from './iconTitle.type';

export interface MultiSelectListProps {
  listArr: Array<IconTitleProps>;
  selectFunc: (value: Array<string>) => void;
}
