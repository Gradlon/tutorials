<template>
  <Layout>
      <div v-for="edge in $page.post.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
      </div>
  </Layout>
</template>

<page-query>
query Post {
  post: allPost {
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
