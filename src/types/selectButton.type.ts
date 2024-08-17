export interface SelectButtonProps {
  selected: boolean;
  btnHeight: string;
  btnText: string;
  clickHandler: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void);
}
