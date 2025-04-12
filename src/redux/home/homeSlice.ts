import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


type HeroSection = {
  title: string;
  description: string;
  dynamicTaglines: string[];
  testimonialButton: {
    text: string;
  };
  image : String;
  imageAlt : String;
};


type WhatWeDo = {
  title: string;
  description: string;
  // dynamicTaglines: string[];
  comprehensive: Comprehensive;
  image : String;
  imageAlt : String;
};


type Comprehensive = {
  title: string;
  content: {
    doNotAccept: {
      text: string;
      explanation: string;
    };
    _id: string;
    title: string;
    description: string;
    plan: Plan[];
    __v: number;
  };
};

type Plan = {
  _id: string;
  services: Service[];
  buttons: Button[];
  amount: string;
  yearTag: string;
  includeText: string;
  title?: string; 
};

type Service = {
  _id: string;
  title: string;
  description: string;
};

type Button = {
  _id: string;
  text: string;
};



type HomeData = {
  heroSection: HeroSection;
  whatWeDo: WhatWeDo;
};


interface HomeState {
  homeData: HomeData | null;
  loading: boolean;
  error: string | null;
}


const initialState: HomeState = {
  homeData: null,
  loading: false,
  error: null,
};


export const fetchHomeData = createAsyncThunk<HomeData, void, { rejectValue: string }>(
  'dashboard/fetchHomeData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}api/homescreen/getHomeScreen`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue('Something went wrong');
    }
  }
);


const homeSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeData.fulfilled, (state, action: PayloadAction<HomeData>) => {
        state.loading = false;
        state.homeData = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default homeSlice.reducer;
