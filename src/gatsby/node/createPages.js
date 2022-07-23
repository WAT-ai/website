const path = require('path');
const query = require('../../templates/Article/query');

module.exports = async ({ graphql, actions, reporter }, options) => {
    const templateDir = path.join(__dirname, '../', '../', 'templates');

    const response = await graphql(query.ArticleTemplateQuery);
    const data = response.data;

    // Create ArticleListing page
    const articleListingPageSlug = '/blog'; // remove duplicate slashes
    reporter.info(`Creating ArticleListing page under ${articleListingPageSlug}`);
    actions.createPage({
        path: articleListingPageSlug,
        component: path.resolve(templateDir, 'ArticleListing', 'index.tsx'),
        context: {
            articles: data.allArticle.articles,
        },
    });

    // Create pages for each individual Article
    data.allArticle.articles.forEach((article) => {
        reporter.info(`Creating Article page under ${article.slug}`);
        actions.createPage({
            path: article.slug,
            component: path.resolve(templateDir, 'Article', 'index.tsx'),
            context: {
                article: article,
                listingPagePath: articleListingPageSlug,
            },
        });
    });
};
