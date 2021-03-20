export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6055bf14b16f08d4bbaa6d09',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-jb5tcafc',
                  apiId: '4b8009f7-7185-4be7-af55-12679e5138c8'
                },
                {
                  buildHookId: '6055bf1504dd74d8643c8b6c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dch2c4n3',
                  apiId: '6f7eb585-02c9-4014-b108-32eff29c6d6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dch2c4n3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
