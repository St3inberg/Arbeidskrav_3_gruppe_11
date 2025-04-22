import { typed } from "sanity";

export const loggforing =  {
    name: 'loggforing',
    title: 'Arbeidslogg',
    type: 'document',
    fields: [
        {
            name: 'Oppgaven',
            title: 'oppgavenavn',
            type: "string",

        },
        {
            title: 'Kommentar',
            name: 'kommentar',
            type: 'array',
            of: [{type: 'string'}]
       },
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
        name: 'dato',
        title: 'Dato',
        type: 'date'

       },
       
       
    ],
}

