import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePosts(pageLimit, numPage) {
  const posts = ref([]);
  const isPostsLoading = ref(true);
  const totalPages = ref(0);
  const fetching = async () => {
    try {
      isPostsLoading.value = true;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: numPage,
            _limit: pageLimit
          }
        }
      );
      totalPages.value = Math.ceil(
        response.headers["x-total-count"] / pageLimit
      );
      posts.value = response.data;
    } catch (e) {
      alert("Ошибка");
    } finally {
      isPostsLoading.value = false;
    }
  };

  const loadMorePostsApi = async () => {
    try {
      numPage += 1;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: numPage,
            _limit: pageLimit
          }
        }
      );
      totalPages.value = Math.ceil(
        response.headers["x-total-count"] / pageLimit
      );
      posts.value = [...posts.value, ...response.data];
    } catch (e) {
      alert("Ошибка");
    }
  };

  onMounted(fetching);

  return {
    posts,
    isPostsLoading,
    totalPages,
    loadMorePostsApi
  };
}
