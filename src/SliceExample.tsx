import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  data: any;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  data: {},
  error: "",
};

export const liveTrackerRequest = createAsyncThunk(
  "liveTrackerData/liveTrackerRequest",
  async (gsId: any) => {
    const headers = { gsId: gsId };
    const url =
      window.location.hostname === "localhost"
        ? process.env.REACT_APP_APPOINTMENT_API_URL + `/appointment/v1/live`
        : process.env.REACT_APP_UI_URL + `/appointment/v1/live`;
    const response = await axios.get(url, { headers });
    return response.data;
  }
);

const liveTrackerSlice = createSlice({
  name: "liveTrackerData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(liveTrackerRequest.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(liveTrackerRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(liveTrackerRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default liveTrackerSlice.reducer;