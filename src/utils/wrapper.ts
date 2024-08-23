import axios from "axios";

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const wrapper = async (
  method: "post" | "get" | "put" | "delete",
  url: string,
  data?: any
) => {
  const headers = {
    accept: "application/json",
    version: "0.0",
  };

  try {
    const response = await axios.request({
      method,
      url,
      params: data || undefined,
      data: data || undefined,
      headers,
    });
    return checkResponse(response);
  } catch (error) {
    return catchError(error);
  }
};
