export type BtnType = 'full' | 'empty';
export type BtnSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  btnType: BtnType;
  btnColor?: string; // full일 때
  textColor: string;
  btnText: string;
  btnSize: BtnSize;
};
