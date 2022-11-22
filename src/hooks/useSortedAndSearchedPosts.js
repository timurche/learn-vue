import { computed, ref } from "vue";
import sortedPosts from "@/hooks/useSortedPosts";

export default function useSortedAndSearchedPosts(sortedPosts) {
  const searchInput = ref("");
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });
  return {
    searchInput,
    sortedAndSearchedPosts
  };
}
