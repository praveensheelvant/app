const { MongoClient } = require("mongodb");


describe("insert and expect record", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("should insert a doc into collection", async () => {
    const records = db.collection("Records");

    const mockRecord = { _id: "some-id", key: "abcd1234", "totalCount": 3000 };
    await records.insertOne(mockRecord);

    const insertedUser = await records.findOne({ _id: "some-id" });
    expect(insertedUser).toEqual(mockRecord);
  });

});