// HomePage.spec.ts
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HomePage from "../pages/HomePage.vue";
import SearchComponent from "../components/SearchComponent.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ErrorDialog from "../components/ErrorDialog.vue";
import HighLightContainer from "../components/Containers/HighLightContainer.vue";
import TopRatedList from "../components/Lists/TopRatedList.vue";
import GenreTvShowList from "../components/Lists/GenreTvShowList.vue";
import ShowsExplorerContainer from "../components/Containers/ShowsExplorerContainer.vue";

// Mocks for the composable functions
const mockUseErrorHandling = {
  errorMessage: "",
  showErrorDialog: false,
  clearError: vi.fn(),
};

const mockUseOrganizedShowsByGenre = {
  organizedShowsByGenre: [],
  loading: false,
};

vi.mock("@/composables/useErrorHandling", () => ({
  useErrorHandling: () => mockUseErrorHandling,
}));

vi.mock("@/composables/useOrganizedShowsByGenre", () => ({
  useOrganizedShowsByGenre: () => mockUseOrganizedShowsByGenre,
}));

describe("HomePage", () => {
  it("renders the search component", () => {
    const wrapper = mount(HomePage);
    expect(wrapper.findComponent(SearchComponent).exists()).toBeTruthy();
  });

  it("shows loading spinner when loading is true", () => {
    mockUseOrganizedShowsByGenre.loading = true;
    const wrapper = mount(HomePage);
    expect(wrapper.findComponent(LoadingSpinner).exists()).toBeTruthy();
  });

  it("does not display error dialog when showErrorDialog is false", () => {
    mockUseErrorHandling.showErrorDialog = false;
    const wrapper = mount(HomePage);
    expect(wrapper.findComponent(ErrorDialog).exists()).toBeFalsy();
  });

  it("renders HighLightContainer and TopRatedList when not loading and no error", () => {
    mockUseOrganizedShowsByGenre.loading = false;
    mockUseErrorHandling.showErrorDialog = false;
    const wrapper = mount(HomePage);
    expect(wrapper.findComponent(HighLightContainer).exists()).toBeTruthy();
    expect(wrapper.findComponent(TopRatedList).exists()).toBeTruthy();
  });

  it("renders ShowsExplorerContainer and GenreTvShowList when not loading and no error", () => {
    mockUseOrganizedShowsByGenre.loading = false;
    mockUseErrorHandling.showErrorDialog = false;
    const wrapper = mount(HomePage);
    expect(wrapper.findComponent(ShowsExplorerContainer).exists()).toBeTruthy();
    expect(wrapper.findComponent(GenreTvShowList).exists()).toBeTruthy();
  });
});
