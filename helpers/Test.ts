import { IInstrument } from "../types/Instrument";
import { mockedInstrumentsList } from "./MockedData";

export const mockFetchInstruments = () => {
  return new Promise<IInstrument[]>((resolve) => {
    setTimeout(() => {
      resolve(mockedInstrumentsList);
    }, 500);
  });
};

export const mockFetchInstrumentById = () => {
  return new Promise<IInstrument>((resolve) => {
    setTimeout(() => {
      resolve(mockedInstrumentsList[0]);
    }, 500);
  });
};
