import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import {
  mockFetchInstrumentById,
  mockFetchInstruments,
} from "../../../helpers/Test";

// To-Do: setup snapshot resolver for save snpashot in specific directory and ignore it on .gitignore file

it("Should get instrument list", async () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result, waitFor } = renderHook(
    () => useQuery("fetchList", mockFetchInstruments),
    { wrapper }
  );
  expect(result.current.isLoading).toBe(true);
  expect(result.current.isError).toBe(false);
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data).toBeTruthy();
  expect(result.current.isLoading).toBe(false);
  expect(result.current.isSuccess).toBe(true);
});

it("Should get instrument by id", async () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result, waitFor } = renderHook(
    () => useQuery("fetchInstrumentById", () => mockFetchInstrumentById()),
    { wrapper }
  );
  expect(result.current.isLoading).toBe(true);
  expect(result.current.isError).toBe(false);
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data?.name).toEqual("Bitcoin");
  expect(result.current.data?.symbol).toEqual("BTC");
  expect(result.current.isLoading).toBe(false);
  expect(result.current.isSuccess).toBe(true);
});
