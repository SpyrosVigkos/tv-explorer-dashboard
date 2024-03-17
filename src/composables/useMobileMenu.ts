import { ref } from "vue";

export function useMobileMenu() {
  const menuActive = ref(false);

  function toggleMenu() {
    menuActive.value = !menuActive.value;
  }
  function closeMenu() {
    menuActive.value = false;
  }

  return {
    menuActive,
    toggleMenu,
    closeMenu,
  };
}
