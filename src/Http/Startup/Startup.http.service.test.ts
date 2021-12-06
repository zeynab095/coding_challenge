import { describe, expect } from "@jest/globals";
import axios from "axios";
import { expectedStartup } from "./Startup.test-data";
import { Startup } from "../../Types/Startup";
import { StartupHttpService } from "./Startup.http.service";
import StartupMapper from "./Startup.mapper";

jest.mock("axios");
jest.mock("./Startup.mapper");
const axiosMock = axios as jest.Mocked<typeof axios>;
const StartupMapperMock = StartupMapper as jest.Mocked<typeof StartupMapper>;

describe("StartupHttpService", () => {
  const expectedStartups = [expectedStartup, expectedStartup];

  describe("getStartups should", () => {
    it("should return startups", async () => {
      axiosMock.get.mockResolvedValueOnce({ data: [{}, {}] });
      StartupMapperMock.map
        .mockReturnValueOnce(expectedStartups[0])
        .mockReturnValueOnce(expectedStartups[1]);

      expect(await StartupHttpService.getStartups()).toEqual(expectedStartups);
    });

    it("should call startup mapper and pass startup dto", async () => {
      axiosMock.get.mockResolvedValueOnce({
        data: [expectedStartup],
      });

      await StartupHttpService.getStartups();

      expect(StartupMapper.map).toHaveBeenCalledWith(expectedStartup);
    });

    it("should call axios with url", async () => {
      axiosMock.get.mockResolvedValueOnce({ data: [{}] });
      StartupMapperMock.map.mockReturnValue({} as Startup);

      await StartupHttpService.getStartups();

      expect(axios.get).toHaveBeenCalledWith("/api/startups");
    });
  });

  describe("getStartupById", () => {
    it("should return startup a startup", async () => {
      axiosMock.get.mockResolvedValueOnce({ data: [{}] });
      StartupMapperMock.map.mockReturnValueOnce(expectedStartup);
      const startup = await StartupHttpService.getStartupById("1");

      expect(startup).toEqual(expectedStartup);
    });

    it("should call project mapper with project response", async () => {
      axiosMock.get.mockResolvedValueOnce({
        data: [expectedStartup],
      });
      await StartupHttpService.getStartupById("1");

      expect(StartupMapper.map).toHaveBeenCalledWith([expectedStartup]);
    });

    it("should call axios with url", async () => {
      axiosMock.get.mockResolvedValueOnce({ data: {} });
      await StartupHttpService.getStartupById("1");

      expect(axios.get).toHaveBeenCalledWith("/api/startups/1");
    });
  });
});
