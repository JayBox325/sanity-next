import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-11-01',
    useCdn: true
})