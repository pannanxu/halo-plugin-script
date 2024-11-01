// Reactor
export const Mono = Java.type('reactor.core.publisher.Mono');

// Halo Api
export const PostContentService = Java.type('run.halo.app.content.PostContentService');
export const ExcerptGenerator = Java.type('run.halo.app.content.ExcerptGenerator');
export const PatchUtils = Java.type('run.halo.app.content.PatchUtils');
export const CommentSubject = Java.type('run.halo.app.content.comment.CommentSubject');
export const SearchService = Java.extend(Java.type('run.halo.app.search.SearchService'));

// Engine Api

// const Core = {
//     Mono,
//     PostContentService,
//     ExcerptGenerator,
//     PatchUtils,
//     CommentSubject,
//     SearchService,
// }
//
// export default Core;