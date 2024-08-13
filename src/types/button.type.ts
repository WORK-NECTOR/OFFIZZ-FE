export type BtnType = 'full' | 'empty';

export interface BaseProps {
  btnType: BtnType;
  textColor: string;
  btnText: string;
  btnHeight: string;
  hoverColor?: string;
  clickHandler: () => void;
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
