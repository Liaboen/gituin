/* eslint-disable prettier/prettier */
import client from './client';

const movieFields = `
filmtittel,
'actor': actor->title,
`;

export const getMovies = async() => {
    const data= await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};


