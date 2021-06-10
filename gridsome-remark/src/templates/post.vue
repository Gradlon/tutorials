<template>
    <div>
        <h1>{{ $page.post.title }}</h1>
        <span><strong>Author: </strong>{{ $page.post.author }}</span> <br />
        <span><strong>Date: </strong>{{ $page.post.created_at }}</span> <br />
        <span><strong>TAGS: </strong></span> <br />
        <span v-for="tag in $page.post.tags" :key="tag.id" :style="`background-color: ${tag.color}; border-radius: 4px; margin: 4px; padding: 3px; color: white;`"><g-link :to="tag.path">{{tag.id}}</g-link> <br /></span>
        <vueRemarkContent>
            <template v-slot:ad>
                <Ad />
            </template>
        </vueRemarkContent>
    </div>
</template>

<page-query>
    query Post($id: ID!) {
        post(id: $id) {
            title
            author
            created_at
            tags {
                id
                color
                path
            }
        }
    }
</page-query>

<script>
import Ad from '../components/Ad'
export default {
    components: {
        Ad,
    }
    
}

</script>

<style lang="scss" scoped>
    
</style>