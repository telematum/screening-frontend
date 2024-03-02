import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gist.githubusercontent.com/' }),
  endpoints: (builder) => ({
    getAppointmentList: builder.query({
      query: () => '/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json',
    }),
  }),
});

export const { useGetAppointmentListQuery } = appointmentApi;
