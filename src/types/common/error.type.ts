export type AxiosErrorResponse = {
  data?: AxiosErrorData;
  status?: number;
};

export type AxiosErrorData = {
  errorMessage: string;
  errorCode: string;
};

export type ApiErrorResponse = {
  errorMessage: string;
  errorCode: string;
  statusCode: number;
};
