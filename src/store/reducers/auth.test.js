import authReducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual({
      token: null,
    });
  });

  it("should store the token upon login", () => {
    expect(
      authReducer(
        {
          token: null,
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          token: "some-token",
        }
      )
    ).toEqual({
      token: "some-token",
    });
  });

  it("should set the token with initial value after logout", () => {
    expect(
      authReducer(
        {
          token: null,
        },
        {
          type: actionTypes.AUTH_LOGOUT,
          token: null,
        }
      )
    ).toEqual({
      token: null,
    });
  });
});
