const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "APAD",
      email: "contato@gmail.com",
      whatsapp: "1234567891",
      city: "Natal",
      uf: "RN",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should be able to create a new incident", async () => {
    const response = await request(app)
      .post("/incidents")
      .set("authorization", "fc7731b8")
      .send({
        title: "Caso 5",
        description: "Detalhes do caso",
        value: 120,
      });
    expect(response.body).toHaveProperty("id");
  });
});
