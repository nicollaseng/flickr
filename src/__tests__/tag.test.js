import mockAxios from "axios";
import { fetchData } from "../server";

let data = [];
const tag = "holidayextras";

for (let i = 0; i < 20; i++) {
  data = [...data, i];
}

describe("it calls flickr api with tags", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        items: data
      }
    })
  );

  it("fetch with tag content", async () => {
    const posts = await fetchData(tag);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(tag).not.toBe(undefined);
    expect(tag.length).toBeGreaterThan(0);
    expect(typeof posts).toBe(typeof data);
    expect(posts.length).toEqual(20);
  });
});
