import { ReactNode } from "react";

export interface BaseProps {
  children: ReactNode | ReactNode[] | null;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface ItemsResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
