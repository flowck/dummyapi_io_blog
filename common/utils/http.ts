import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API as string,
  headers: {
    "app-id": process.env.NEXT_PUBLIC_TOKEN as string,
  },
});

export const getRequestToken = () => axios.CancelToken.source();
export const isCancelError = (error: unknown) => axios.isCancel(error);
