import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {MESSAGE} from '../../utils/constants/message'
import axiosInstance from '../../api/axiosInstance'
import {END_POINTS} from '../../api/endpoints'


export const showUser = createAsyncThunk(
  "userDetail",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(END_POINTS.POSTS);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: MESSAGE.ERROR });
    }
  }
);


export const createPost = createAsyncThunk(
  "createPost",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(END_POINTS.POSTS, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: MESSAGE.ERROR });
    }
  }
);

export const deletePost = createAsyncThunk(
  "deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${END_POINTS.POSTS}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: MESSAGE.ERROR });
    }
  }
);

const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || MESSAGE.ERROR;
      })
      .addCase(createPost.pending,(state)=>{
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || MESSAGE.ERROR;
      })
  },
  
});

export default userDetail.reducer;