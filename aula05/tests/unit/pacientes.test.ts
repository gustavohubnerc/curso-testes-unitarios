import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid', () => {
  return {
    v4: () => { return "protocolo simulado no mock" }
  };
});

describe("calculator tests", () => {
  it("should generate a protocol for a pacient", () => {
    const protocol = uuidv4();
    expect(protocol).toBe("protocolo simulado no mock");
  });
});