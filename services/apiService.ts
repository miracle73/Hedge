import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface BusinessIntegrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  businessNeeds: string;
}

interface BusinessIntegrationData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  businessNeeds: string;
  status: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BusinessIntegrationResponse {
  success: boolean;
  message: string;
  data: BusinessIntegrationData;
}

// New interfaces for demo request
interface DemoRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  goal: string;
  contentType: string;
  urgencyLevel: string;
  metadata: string;
}

interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  goal: string;
  contentType: string;
  urgencyLevel: string;
  metadata: string;
  demoMailSent: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface DemoRequestResponse {
  success: boolean;
  message: string;
  data: DemoRequestData;
}

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://deepfake-detector-996819843496.us-central1.run.app/api/v1",
  }),
  endpoints: (builder) => ({
    demoRequest: builder.mutation<DemoRequestResponse, DemoRequest>({
      query: ({
        firstName,
        lastName,
        email,
        role,
        goal,
        contentType,
        urgencyLevel,
        metadata,
      }) => ({
        url: "demo-request",
        method: "POST",
        body: {
          firstName,
          lastName,
          email,
          role,
          goal,
          contentType,
          urgencyLevel,
          metadata,
        },
      }),
    }),
    businessIntegration: builder.mutation<
      BusinessIntegrationResponse,
      BusinessIntegrationRequest
    >({
      query: ({
        firstName,
        lastName,
        email,
        companyName,
        companyWebsite,
        businessNeeds,
      }) => ({
        url: "business-integration",
        method: "POST",
        body: {
          firstName,
          lastName,
          email,
          companyName,
          companyWebsite,
          businessNeeds,
        },
      }),
    }),
  }),
});

export const { useBusinessIntegrationMutation, useDemoRequestMutation } =
  apiService;
