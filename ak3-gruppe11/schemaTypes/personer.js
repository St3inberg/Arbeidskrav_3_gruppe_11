export const personer =  {
    name: 'personer',
    title: 'Personer',
    type: 'document',
    fields: [
        {
            name: 'personname',
            title: 'Navn',
            type: 'string'
        },
        {
            name: 'epost',
            title: 'Epost',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Bilde',
            type: 'image'
        },
       {
            title: 'Interesser',
            name: 'interesser',
            type: 'array',
            of: [{type: 'string'}]
          
        
       },
       {
        name: 'biografi',
        title: 'Biography',
        type: 'text'

       },
       {
        name: 'productslug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'personname',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-').replace('æ', 'ae').replace('å', 'aa').replace('ø', 'o')
                                 .slice(0, 200)
          },
    },
    ],
}

