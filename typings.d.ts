import 'umi/typings';

interface NewToken {
  redashGray: string;
}

declare module "antd-style" {
  export interface CustomToken extends NewToken {}
}