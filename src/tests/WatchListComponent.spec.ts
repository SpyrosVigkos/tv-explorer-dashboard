import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Watchlist from "../components/Watchlist.vue";

describe("Watchlist", () => {
  it("renders the header", () => {
    const wrapper = mount(Watchlist);
    const header = wrapper.find("h1");

    // Assert the header text is correct
    expect(header.text()).toBe("My Watchlist");
  });
});
