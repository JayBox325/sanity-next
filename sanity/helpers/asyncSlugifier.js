import sanityClient from 'part:@sanity/base/client';

async function asyncSlugifier(input) {
    const client = sanityClient.withConfig({
        apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2021-03-25', // Using the Sanity client without specifying the API version is deprecated
    });
    const parentQuery = '*[_id == $id][0]'; // a GROQ query, feel free to change this up to match what you need
    const parentQueryParams = {
        id: input.doc.parent?._ref || '',
    };
    const parent = await client.fetch(
        parentQuery,
        parentQueryParams,
    );
    const parentSlug = parent?.slug?.current ? `${parent.slug.current}/` : ''; // if there's no parent assign an empty string, it will make the function return the current slug as the root
    const pageSlug = input.doc.title
        .toLowerCase()
        //Remove spaces
        .replace(/\s+/g, "-")
        //Remove special characters
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
        // Trim
        .slice(0, 200)
    return `${parentSlug}${pageSlug}`;
}

export default asyncSlugifier