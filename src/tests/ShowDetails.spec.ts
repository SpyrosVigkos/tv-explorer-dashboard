// ShowDetails.spec.ts
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ShowDetails from "../components/ShowDetails.vue";

// Mock data for the TvShow prop
const mockShow = {
  id: 1,
  url: "https://example.com/mock-show-details",
  name: "Mock Show",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Thriller"],
  status: "Running",
  runtime: 60,
  averageRuntime: 60,
  premiered: "2021-07-15",
  ended: null,
  officialSite: null,
  schedule: {
    time: "21:00",
    days: ["Monday", "Thursday"],
  },
  rating: {
    average: 9.0,
  },
  weight: null,
  network: {
    id: 1,
    name: "Mock Network",
    country: null,
    officialSite: null,
  },
  webChannel: null,
  dvdCountry: null,
  externals: null,
  image: {
    medium: "https://example.com/mock-show-image-medium.jpg",
    original: "https://example.com/mock-show-image.jpg",
  },
  summary: "<p>Mock summary of the show.</p>",
  updated: 1234567890,
  _links: null,
};

// Mock composable
const isInWatchListMock = vi.fn();
const toggleWatchListMock = vi.fn();
vi.mock("@/composables/useWatchList", () => ({
  useWatchList: () => ({
    isInWatchList: isInWatchListMock,
    toggleWatchList: toggleWatchListMock,
  }),
}));

describe("ShowDetails", () => {
  it("renders show details", () => {
    const wrapper = mount(ShowDetails, {
      props: {
        show: mockShow,
      },
    });

    expect(wrapper.text()).toContain(mockShow.name);
    expect(wrapper.find("img").attributes("src")).toBe(mockShow.image.original);
    expect(wrapper.text()).toContain(`Rating: ${mockShow.rating.average}`);
    expect(wrapper.html()).toContain(mockShow.summary);
    expect(wrapper.find("a").attributes("href")).toBe(mockShow.url);
  });
});
