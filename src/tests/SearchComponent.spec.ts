// SearchComponent.spec.ts
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import SearchComponent from "../components/SearchComponent.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import SearchVerticalList from "../components/Lists/SearchVerticalList.vue";

// Mock composable
vi.mock("@/composables/useSearchShows", () => ({
  useSearchShows: () => ({
    searchTerm: "",
    performSearch: vi.fn(),
    searchResults: [],
    isLoading: false,
  }),
}));

describe("SearchComponent", () => {
  it("renders the search input and button", () => {
    const wrapper = mount(SearchComponent);

    // Check if the input field is present
    const input = wrapper.find("input[type='text']");
    expect(input.exists()).toBe(true);

    // Check if the search button is present
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });

  it("conditionally renders LoadingSpinner and SearchVerticalList based on isLoading", async () => {
    // Mock the composable to return isLoading as true
    vi.mock("@/composables/useSearchShows", () => ({
      useSearchShows: () => ({
        searchTerm: "",
        performSearch: vi.fn(),
        searchResults: [],
        isLoading: true,
      }),
    }));

    // Mount the component with isLoading as true
    let wrapper = mount(SearchComponent);

    // Check if SearchVerticalList is rendered
    expect(wrapper.findComponent(SearchVerticalList).exists()).toBe(true);

    // Update the mock to set isLoading to false
    vi.mock("@/composables/useSearchShows", () => ({
      useSearchShows: () => ({
        searchTerm: "",
        performSearch: vi.fn(),
        searchResults: [],
        isLoading: false,
      }),
    }));

    // Re-mount the component with isLoading as false
    wrapper = mount(SearchComponent);

    // Check if LoadingSpinner is not rendered
    expect(wrapper.findComponent(LoadingSpinner).exists()).toBe(false);

    // Check if SearchVerticalList is rendered
    expect(wrapper.findComponent(SearchVerticalList).exists()).toBe(true);
  });
});
