<template>
    <div>
        <h1>{{$page.tag.id}}</h1>
        <pre>
            {{$page.tag}}
        </pre>
        <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
        </div>
    </div>
</template>

<page-query>
    query Tag($id: ID!){
      tag(id: $id) {
        id
        belongsTo {
          totalCount
          edges {
            node {
              ... on Post {
                title
                path
              }
            }
          }
        }
      }
    }
</page-query>