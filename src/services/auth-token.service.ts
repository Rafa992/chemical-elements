import { axiosClassic } from "@/api/interceptors";
import { LoginResponse } from "@/types/auth";
import Cookies from "js-cookie";

export enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string, refreshToken: string) => {

  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
  });
  Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
  Cookies.remove(EnumTokens.REFRESH_TOKEN);
};

export const getNewTokens = async() => {
  try {
    const response = await axiosClassic.post<LoginResponse>(
      "/auth/login/access-token"
    );

    if (response.data.accessToken) {
      removeFromStorage();
      saveTokenStorage(response.data.accessToken, response.data.refreshToken);
    }

    return response;
  } catch (error) {
    removeFromStorage();
    window.location.pathname = "/auth/login";
  }
}