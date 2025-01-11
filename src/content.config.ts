// src/content.config.ts
export default {
    collections: {
      Projetos: {
        name: 'projetos',
        label: 'projetos',
        folder: 'src/content/projetos',
        create: true,
        fields: [
          { name: 'title', label: 'Título', widget: 'string' },
          { name: 'description', label: 'Descrição', widget: 'text' },
          { name: 'publishDate', label: 'Data de Publicação', widget: 'datetime' },
          { name: 'tags', label: 'Tags', widget: 'list' },
          { name: 'featured', label: 'Em Destaque', widget: 'boolean' },
          { name: 'thumbnail', label: 'Miniatura', widget: 'image' },
          { name: 'body', label: 'Corpo', widget: 'markdown' },
        ]
      }
    }
  }
  