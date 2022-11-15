import axios from "axios";
export const postModule = {
  state: () => ({
    searchInput: "",
    posts: [],
    dialogVisible: false,
    pageNum: 1,
    pageLimit: 10,
    totalPages: 0,
    isPostLoading: false,
    postsCountf: 0,
    selectedOption: "",
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По описанию" }
    ]
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedOption]?.localeCompare(post2[state.selectedOption])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    }
  },
  mutations: {
    setSearchInput(state, searchInput) {
      state.searchInput = searchInput;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setDialogVisible(state, dialogVisible) {
      state.dialogVisible = dialogVisible;
    },
    setPageNum(state, pageNum) {
      state.pageNum = pageNum;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setIsPostLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPostsCountf(state, postsCountf) {
      state.postsCountf = postsCountf;
    },
    setSelectedOption(state, selectedOption) {
      state.selectedOption = selectedOption;
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setIsPostLoading", true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.pageNum,
              _limit: state.pageLimit
            }
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.pageLimit)
        );
        commit("setPosts", [...response.data]);
      } catch (e) {
        alert(e);
      } finally {
        commit("setIsPostLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPageNum", state.pageNum + 1);
        commit("setIsPostLoading", true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.pageNum,
              _limit: state.pageLimit
            }
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / this.pageLimit)
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (e) {
        alert(e);
      } finally {
        commit("setIsPostLoading", false);
      }
    }
  },
  namespaced: true
};
