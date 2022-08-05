export type AuthenticationError = {
  responseStatus: number;
  responseStatusText: string;
  code: string;
  requestHeaders: object;
  url: string;
  method: string;
  responseHeaders: object;
  responseData: string;
};
