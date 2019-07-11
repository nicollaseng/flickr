import mockAxios from "axios";
import { fetchData } from "../server";

let data = [];

for (let i = 0; i < 20; i++) {
  data = [...data, i];
}

describe("it calls flickr api", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        items: data
      }
    })
  );

  it("call axios and fetch general content", async () => {
    const posts = await fetchData();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(posts.length).toEqual(20);
  });
});
