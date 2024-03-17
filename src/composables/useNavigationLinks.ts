import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export function useNavigationLinks() {
  const router = useRouter();
  const route = useRoute();

  // Define your navigation links
  const links = ref([
    { name: "Home", path: "/" },
    {
      name: "Search",
      path: "/search", // This should match the route name in your router configuration
    },
    // Add other navigation links as needed
  ]);

  // Computed property to get the current active link
  const activeLink = computed(() => {
    return links.value.find((link) => link.path === route.path);
  });

  // Method to navigate to a given path
  const navigate = (path: string) => {
    router.push(path);
  };
  const navigateToShowDetails = (id: number) => {
    router.push({ name: "ShowDetails", params: { id: id.toString() } });
  };

  return {
    links,
    activeLink,
    navigate,
    navigateToShowDetails,
  };
}
