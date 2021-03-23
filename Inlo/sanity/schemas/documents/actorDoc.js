const actorDoc = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Actorname',
            description: 'Dette er navnet på skuespiller',
            validation: (Rule) => Rule.required(),
        }
    ]
    }
    export default actorDoc;