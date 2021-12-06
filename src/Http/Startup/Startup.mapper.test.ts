import { describe, expect } from "@jest/globals";
import { startupDTO } from "./Startup.test-data";
import StartupMapper from "./Startup.mapper";

describe("Startup Mapper", () => {
  it("should create Date objects from date strings", () => {
    const mappedStartup = StartupMapper.map(startupDTO);

    expect(mappedStartup.dateCreated).toEqual(new Date(startupDTO.dateCreated));
    expect(mappedStartup.dateFounded).toEqual(new Date(startupDTO.dateFounded));
  });
});
