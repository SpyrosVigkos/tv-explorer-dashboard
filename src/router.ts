import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ShowDetailsPage from "./pages/ShowDetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // Assuming the home page should display all shows
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/show/:id", // :id is a dynamic segment that will match any show's ID
    name: "ShowDetails",
    component: ShowDetailsPage,
    props: true, // This allows the id parameter to be passed as a prop to the component
  },
  // {
  //   path: "/watch-list",
  //   name: "WatchList",
  //   component: WatchList,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
