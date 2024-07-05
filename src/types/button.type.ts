export type BtnType = 'full' | 'empty';
export type BtnSize = 'small' | 'medium' | 'large';

export interface BaseProps {
  btnType: BtnType;
  textColor: string;
  btnText: string;
  btnSize: BtnSize;
}

// btnType이 'full'일 때 btnColor 입력을 강제하기 위해 정의
export interface FullProps extends BaseProps {
  btnType: 'full';
  btnColor: string;
}

export interface EmptyProps extends BaseProps {
  btnType: 'empty';
  btnColor?: string;
}

export type ButtonProps = FullProps | EmptyProps;
