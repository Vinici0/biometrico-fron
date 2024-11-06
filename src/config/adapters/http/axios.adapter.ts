import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined
  ): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url} `);
    }
  }
  async post<T>(
    url: string,
    body: unknown,
    options?: Record<string, unknown>
  ): Promise<T> {
    try {
      const { data } = await this.axiosInstance.post<T>(url, body, options);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw error.response.data;
      } else {
        throw new Error(`Error fetching post: ${url}`);
      }
    }
  }

  async put<T>(
    url: string,
    body: unknown,
    options?: Record<string, unknown>
  ): Promise<T> {
    try {
      const { data } = await this.axiosInstance.put<T>(url, body, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching put: ${url}`);
    }
  }

  async delete<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.delete<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching delete: ${url}`);
    }
  }
}
