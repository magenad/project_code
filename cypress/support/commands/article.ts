import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1522,
    createdAt: '24.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};
export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { authorization: 'ffefs' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};
export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: { authorization: 'ffefs' },
    });
};
declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
