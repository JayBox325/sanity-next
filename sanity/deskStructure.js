import S from '@sanity/desk-tool/structure-builder'
import { FaCogs } from 'react-icons/fa'

export default () =>
  S.list()
    .title('Content')
    .items([
        // Show site config with one 'entry'
        S.listItem()
            .title('Site Config')
            .icon(FaCogs)
            .child(
                S.document()
                .schemaType('siteConfig')
                .documentId('siteConfig')
            ),

        // Neat dividing line
        S.divider(),

        // Main content
        S.listItem()
          .title('Pages')
          .schemaType('page')
          .child(S.documentTypeList('page').title('Pages')),

        S.listItem()
          .title('News')
          .schemaType('post')
          .child(S.documentTypeList('post').title('News')),

        S.divider(),

        S.listItem()
            .title('Authors')
            .schemaType('author')
            .child(S.documentTypeList('author').title('Authors')),

        S.listItem()
            .title('Categories')
            .schemaType('category')
            .child(S.documentTypeList('category').title('Categories')),

        // Nested view (not used right now, but could be helpful to save)
        // S.listItem()
        //     .title('Entries')
        //     .child(
        //       S.list()
        //         .title('Entries')
        //         .items([
        //           S.listItem()
        //             .title('Pages')
        //             .schemaType('page')
        //             .child(S.documentTypeList('page').title('Pages')),

        //           S.listItem()
        //             .title('News')
        //             .schemaType('post')
        //             .child(S.documentTypeList('post').title('News'))
        //         ])
        //     ),

        // Show the rest
        // ...S.documentTypeListItems().filter(listItem => !['siteConfig', 'post', 'page'].includes(listItem.getId()))
    ])