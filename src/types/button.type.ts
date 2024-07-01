export type BtnType = 'normal' | 'active' | 'inactive' | 'alert';
export type BtnSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  btnType: BtnType;
  btnText: string;
  btnSize: BtnSize;
};
