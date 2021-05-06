export const getIsLoggedIn = (state) => !!state.auth.accessToken;

export const getAccessToken = (state) => state.auth.accessToken;
