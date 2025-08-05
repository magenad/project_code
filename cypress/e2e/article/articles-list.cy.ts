const { _ } = Cypress;

let viewsCount = 0;
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('и сортировка по просмотрам работает', () => {
        cy.getByTestId('ArticleSortSelector.ArticleSortField').select(2);
        cy.intercept('http://localhost:8000/articles*').as('getArticles');
        cy.wait(['@getArticles'])
            .wait(100)
            .then(() => {
                const toStrings = (cells$: JQuery<HTMLElement>) =>
                    _.map(cells$, 'textContent');
                const toNumbers = (text: (null | string)[]): number[] =>
                    _.map(text, Number) || [];
                cy.getByTestId('ArticleListItem.Views.Paragraph')
                    .then(toStrings)
                    .then(toNumbers)
                    .then((result) => {
                        const sorted = _.sortBy(result);
                        expect(result, 'cells are sorted').to.deep.equal(
                            sorted,
                        );
                    });
            });
    });
});
