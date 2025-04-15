export const loggforing =  {
    name: 'loggforing',
    title: 'Arbeidslogg',
    type: 'document',
    fields: [
        
        {
            name: 'navn',
            title: 'Navn',
            type: 'array',
            of: [{
    type: 'reference',
            to: [{type: 'personer'}] //jeg finner categories i categories.js første name
            }],
            
           },
       {
            title: 'Kommentar',
            name: 'kommentar',
            type: 'array',
            of: [{type: 'string'}]
          
        
       },

       {
        name: 'dato',
        title: 'Dato',
        type: 'date'

       },
       
       
    ],
}

