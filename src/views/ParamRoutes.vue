<template>
  <div>Dynamic Page</div>
  <div v-for="blog in allBlogs" :key="blog.blog_id" class="shadow col-6 mx-auto p-5 my-3">
    <h1 class="text-center text-primary">{{ blog.title }}</h1>
    <p>{{ blog.blog_content.slice(0,50)}}......</p>
    <router-link @click="storeUser(blog)" :to="{ name: 'blogView', params: {id:blog.blog_id} }">Read More</router-link>
  </div>

</template>

<script lang="ts">
interface Blog{
blog_id:number,
title: string,
blog_content: string
}

export default {

  methods :{
    storeUser(blog:Blog){
      // console.log(blog);
      localStorage.setItem('blogdetail', JSON.stringify(blog))
    }
  },
  data() {
    return {

      allBlogs:[
        {
          blog_id: 1,
          title: 'Housing',
          blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui et cum ut sint temporibus, aspernatur aliquam officia rem soluta porro est minus eum ipsa modi hic atque eveniet odio perferendis at quam necessitatibus. Excepturi, alias quas? Enim, quibusdam recusandae dignissimos nam consequuntur exercitationem sequi quo laborum, doloremque saepe id?'
        },
        {
          blog_id: 2,
          title: 'Agriculture',
          blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui et cum ut sint temporibus, aspernatur aliquam officia rem soluta porro est minus eum ipsa modi hic atque eveniet odio perferendis at quam necessitatibus. Excepturi, alias quas? Enim, quibusdam recusandae dignissimos nam consequuntur exercitationem sequi quo laborum, doloremque saepe id?'
        },
        {
          blog_id: 3,
          title: 'Banking',
          blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui et cum ut sint temporibus, aspernatur aliquam officia rem soluta porro est minus eum ipsa modi hic atque eveniet odio perferendis at quam necessitatibus. Excepturi, alias quas? Enim, quibusdam recusandae dignissimos nam consequuntur exercitationem sequi quo laborum, doloremque saepe id?'
        },
        {
          blog_id: 4,
          title: 'Education',
          blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui et cum ut sint temporibus, aspernatur aliquam officia rem soluta porro est minus eum ipsa modi hic atque eveniet odio perferendis at quam necessitatibus. Excepturi, alias quas? Enim, quibusdam recusandae dignissimos nam consequuntur exercitationem sequi quo laborum, doloremque saepe id?'
        },
      ]
    }
  },
  mounted(){
    localStorage.setItem('allblogsdetails', JSON.stringify(this.allBlogs));
    console.log(localStorage['allblogsdetails']);
  }
}
</script>

<style></style>
