// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
    tailwind(),
]
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/css/app.scss'),

      ],
    })
}

module.exports = {
    siteName: 'Integral-Design',
    plugins: [
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Post',
                baseDir: './content/posts',
                template: './src/templates/post.vue',
                pathPrefix: '/posts',
                includePaths: ['./src/sections/'],
                route: '/blog/:slug',
                // route: '/blog/:title',
                // route: '/blog/:id',
                refs: {
                    tags: 'Tag'
                }
            }
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Tag',
                baseDir: './content/tags',
                template: './src/templates/tag.vue',
                pathPrefix: '/tags',
            }
        }
    ],
    css: {
            loaderOptions: {
                postcss: {
                    plugins: postcssPlugins,
                },
            },
        },
    chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
