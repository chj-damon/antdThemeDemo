import 'umi/typings';

declare global {
  interface Window {
    message: MessageInstance;
    notification: NotificationInstance;
    modal: ModalType;
  }
}

interface NewToken {
  redashGray: string;
}

declare module "antd-style" {
  export interface CustomToken extends NewToken {}
}