import sanityClient from '@sanity/client'
// import { createCliemt } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";


const client = sanityClient({
    projectId: 'faw5gq86',
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-10-21',
    token: 'skmNmcFF4vieK8woqLXvdO6rJIUa4enRh5p4XrpdieCBcknXxpZcNAbJe2OIL0YrFV5CVqZ7UHYOSX9jqWQ0tEpFh6x1w85lVwDzF79PdF6wYCX9DwFsaTjtIXWVYKMUAPeG5QQPqslZ6YX2AjBaexv13GYt0795Vq1ccRgxaju7nlpOEHmb'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors

export default client