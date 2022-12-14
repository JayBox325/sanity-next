import S from '@sanity/desk-tool/structure-builder'
import { FaList, FaCogs, FaShareAlt } from 'react-icons/fa'
import { AiFillDashboard } from 'react-icons/ai'
import {createDeskHierarchy} from '@sanity/hierarchical-document-list'

export default () =>
    S.list()
        .title('Content')
        .items([
            // Show site config with one 'entry'
            S.listItem()
                .title('Site Config')
                .icon(AiFillDashboard)
                .child(
                    S.list()
                        .title('Settings')
                        .items([
                            S.listItem()
                                .title('Settings')
                                .icon(FaCogs)
                                .child(
                                    S.document()
                                        .title('Settings')
                                        .schemaType('siteConfig')
                                        .documentId('siteConfig')
                                ),

                            S.listItem()
                                .title('Main Navigation')
                                .icon(FaList)
                                .child(
                                    S.document()
                                        .title('Main Navigation')
                                        .schemaType('nav')
                                        .documentId('nav')
                                ),

                            S.listItem()
                                .title('Social Networks')
                                .icon(FaShareAlt)
                                .child(
                                    S.document()
                                        .title('Social Networks')
                                        .schemaType('socialNetworks')
                                        .documentId('socialNetworks')
                                ),
                        ])
                ),

            // Neat dividing line
            S.divider(),

            // Main content
            createDeskHierarchy({
                title: 'Site pages',
        
                // The hierarchy will be stored in this document ID ????
                documentId: 'sitePages',
        
                // Document types editors should be able to include in the hierarchy
                referenceTo: ['page'],
        
                // ??? Optional: provide filters and/or parameters for narrowing which documents can be added
                // referenceOptions: {
                //   filter: 'status in $acceptedStatuses',
                //   filterParams: {
                //     acceptedStatuses: ['published', 'approved']
                //   }
                // },
        
                // ??? Optional: limit the depth of your hierarachies
                maxDept: 3
              }),

            // S.listItem()
            //     .title('Pages')
            //     .schemaType('page')
            //     .child(
            //         S.documentTypeList('page')
            //         .title('Pages')
            //     ),

            S.listItem()
                .title('News')
                .schemaType('post')
                .child(
                    S.documentTypeList('post')
                    .title('News')
                ),

            S.divider(),

            S.listItem()
                .title('Authors')
                .schemaType('author')
                .child(
                    S.documentTypeList('author')
                        .title('Authors')
                ),

            S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(
                    S.documentTypeList('category')
                    .title('Categories')
                ),

            // Show the rest
            // ...S.documentTypeListItems().filter(listItem => !['siteConfig', 'post', 'page'].includes(listItem.getId()))
        ])