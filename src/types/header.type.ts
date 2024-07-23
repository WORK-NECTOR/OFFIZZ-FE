import { HEADER_TEXT } from '@/constants/header';

type HeaderTextType = typeof HEADER_TEXT;
type KeysToUnion = 'home' | 'recommendation' | 'recap';
export type HeaderTextUnion = HeaderTextType[KeysToUnion];
