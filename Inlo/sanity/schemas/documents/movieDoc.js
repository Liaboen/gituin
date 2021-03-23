const movieDoc = {
    title: 'MovieTitle',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Title',
           name: 'filmtittel',
            type: "string"
        },
        {
            title: 'Skuespiller',
            name: 'actor',
            type: 'reference',
            to: [{type: 'actor'}]
          }
        ],
        preview: {
            select: {
                title: 'filmtittel',
                actor: 'actor.title',
            },
            prepare(selection) {
                const{ title, actor} = selection;
                return {
                    title,
                    subtitle: `Skuespiller: ${actor}`
                }
            }
        }
    
    }
    export default movieDoc;