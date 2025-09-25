import type { AxiosError } from 'axios';
import type { ApiErrorResponse, AxiosErrorResponse } from '../types/common/error.type';

export const getApiErrorResponse = (error: AxiosError): ApiErrorResponse => {
  const axiosErrorResponse = error.response as Undefinable<AxiosErrorResponse>;
  return {
    errorMessage: axiosErrorResponse?.data?.errorMessage || 'Network Error',
    errorCode: axiosErrorResponse?.data?.errorCode || 'NETWORK_ERROR',
    statusCode: axiosErrorResponse?.status || -1,
  };
};
