import { IconTitleProps } from './iconTitle.type';

export interface SingleSelectListProps {
  listArr: Array<IconTitleProps>;
  selectFunc: (value: string) => void;
}
