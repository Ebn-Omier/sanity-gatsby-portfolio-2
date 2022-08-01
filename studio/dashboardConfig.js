export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62e726b367682647b44bccaf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-3gusydh6',
                  apiId: '3ab5cd00-3874-4c3a-8354-e1654bec7767'
                },
                {
                  buildHookId: '62e726b30769b33f422c920e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-igzcs3gi',
                  apiId: '50bb1df2-cf1d-45e6-8c33-1364e42dfee8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ebn-Omier/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-igzcs3gi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
