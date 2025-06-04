<template>
  <p>{{ $route.params.id }}</p>
  <div>
    <p>
      {{ getBlog?.title }}
    </p>
    <p>
      {{ getBlog?.blog_content }}
    </p>
  </div>
</template>

<script lang="ts">
interface Blog {
  blog_id: number;
  title: string;
  blog_content: string;
}

export default {
  methods: {

  },
  data() {
    return {
      allBlogs: JSON.parse(localStorage.getItem('allblogsdetails')!)
    }
  },
  computed: {
      getBlog() {
      return this.allBlogs.find((blog: Blog) => blog.blog_id === Number(this.$route.params.id));
    }
  }
}
</script>

<style></style>
