import { IconTitleProps } from './iconTitle.type';

export type IconTitleKey = IconTitleProps & {
  keyName: string;
};

export interface MultiSelectListProps {
  listArr: Array<IconTitleKey>;
  selectFunc: (value: Array<string>) => void;
}
