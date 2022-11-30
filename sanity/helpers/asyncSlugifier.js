import sanityClient from 'part:@sanity/base/client';

async function asyncSlugifier(input) {
    const client = sanityClient.withConfig({
        apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2021-03-25', // Using the Sanity client without specifying the API version is deprecated
    });

    const pageSlug = input.doc.title
        .toLowerCase()
        //Remove spaces
        .replace(/\s+/g, "-")
        //Remove special characters
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
        // Trim
        .slice(0, 200)
    return pageSlug;
}

export default asyncSlugifier