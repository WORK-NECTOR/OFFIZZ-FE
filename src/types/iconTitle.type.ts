import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IconTitleProps {
  icon: string | StaticImport;
  title: string;
}
