const should = require("should");
const server = require("./server");

describe("server test suite", () => {
  it('should return "Hello World"', () => {
    server().should.be.equal("Hello World");
  });
});
