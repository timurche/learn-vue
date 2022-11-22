import { computed, ref } from "vue";

export default function useSortedPosts(posts) {
  const selectedOption = ref("");
  const sortedPosts = computed(() => {
    return [...posts.value].sort((post1, post2) =>
      post1[selectedOption.value]?.localeCompare(post2[selectedOption.value])
    );
  });
  return {
    selectedOption,
    sortedPosts
  };
}
