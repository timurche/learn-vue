<template>
  <div>
    <div style="display: flex">
      <my-button class="crtBtn" @click="showDialog"> Создать пост </my-button>

      <my-button @click="clearAll" class="crtBtnclr crtBtn"
        >Очистить посты</my-button
      >
    </div>
    <div class="filters">
      <h4>Сортировка:</h4>
      <my-select
        class="mySelect"
        v-model="selectedOption"
        :options="sortOptions"
      />
      <h4>Поиск:</h4>
      <my-input v-model="searchInput" placeholder="Вводи..."></my-input>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <h4>Создание поста</h4>
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      style="align-self: flex"
      @remove="removePost"
      :postsprops="sortedAndSearchedPosts"
    />
    <div v-if="isPostLoading">*** идет загрузка***</div>
  </div>
  <div v-intersection="loadMorePostsApi" class="observer"></div>
</template>

<script>
import postForm from "@/components/PostForm";
import postList from "@/components/PostList";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: { postForm, postList },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  setup(postsprops, context) {
    const { posts, isPostsLoading, totalPages, loadMorePostsApi } = usePosts(
      10,
      1
    );
    const { selectedOption, sortedPosts } = useSortedPosts(posts);
    const { searchInput, sortedAndSearchedPosts } = useSortedAndSearchedPosts(
      sortedPosts
    );
    context.expose({ loadMorePostsApi });
    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedOption,
      sortedPosts,
      searchInput,
      sortedAndSearchedPosts,
      loadMorePostsApi,
    };
  },
};
</script>

