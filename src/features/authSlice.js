import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// services
import headers from "services/Headers";

const initialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  listMessage: [],
};

export const RegisterUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("age", user.age);
      formData.append("avatar", user.avatar);

      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data.body.data.user;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;

        if (response.validations) {
          return thunkAPI.rejectWithValue(response.validations.errors);
        } else {
          return thunkAPI.rejectWithValue(response.message);
        }
      }
    }
  }
);

export const LoginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/login`,
        {
          email: user.email,
          password: user.password,
        }
      );

      return response.data.body.data;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const VerifyUser = createAsyncThunk(
  "user/verifyUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/auth/verify`,
        headers()
      );
      return response.data.body.data.user;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetMsg: (state) => {
      return { ...state, message: "" };
    },
    resetSuccess: (state) => {
      return { ...state, isSuccess: false };
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(RegisterUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.isLoading = false;

      if (Array.isArray(action.payload)) {
        state.listMessage = action.payload;
      } else {
        state.message = action.payload;
      }
    });

    // Login
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });

    // Verify
    builder.addCase(VerifyUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { reset, resetMsg, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
