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
      formData.append("phone", user.phone);
      formData.append("password", user.password);
      formData.append("npm", user.npm);
      formData.append("avatar", user.avatar);
      formData.append("faculty_id", user.faculty_id);

      console.log(user.name);

      const response = await axios.post(
        `${process.env.REACT_APP_API}/authentications/register`,
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
        `${process.env.REACT_APP_API}/authentications/login`,
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
        `${process.env.REACT_APP_API}/authentications/verify`,
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

export const ActivationUser = createAsyncThunk(
  "user/activationUser",
  async (code, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/authentications/activation`,
        { code },
        headers()
      );
      return response.data.body.message;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const ResendOtp = createAsyncThunk(
  "user/resendOtp",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/authentications/resend-otp`,
        headers()
      );
      return response.data.body.message;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const ForgotPasswordUser = createAsyncThunk(
  "user/forgotPasswordUser",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/authentications/forgot-password`,
        { email },
        headers()
      );
      return response.data.body.message;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const ResetPasswordUser = createAsyncThunk(
  "user/resetPasswordUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API}/authentications/reset-password`,
        {
          email: data.email,
          code: `FKG-${data.code}`,
          password: data.password,
        },
        headers()
      );
      return response.data.body.message;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const ChangeStatusLogin = createAsyncThunk(
  "user/changeStatusLogin",
  async (status, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/user/change-status-login`,
        {
          status: status,
        },
        headers()
      );
      return response.data.body.message;
    } catch (error) {
      if (error.response) {
        const response = error.response.data.body;
        return thunkAPI.rejectWithValue(response.message);
      }
    }
  }
);

export const CheckOtp = createAsyncThunk(
  "auth/checkOtp",
  async (code, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/authentications/check-otp`,
        {
          code: code,
        }
        // headers()
      );
      return response.data.body.message;
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

    // Activation
    builder.addCase(ActivationUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ActivationUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(ActivationUser.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });

    // Resend OTP
    builder.addCase(ResendOtp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ResendOtp.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(ResendOtp.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });

    // Forgot Password User
    builder.addCase(ForgotPasswordUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ForgotPasswordUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(ForgotPasswordUser.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });

    // Reset Password User
    builder.addCase(ResetPasswordUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ResetPasswordUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(ResetPasswordUser.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });
  },
});

export const { reset, resetMsg, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
