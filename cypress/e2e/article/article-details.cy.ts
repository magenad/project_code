let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then(article=>{
            currentArticleId=article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    // Создали статью - протестировали все что нужно - удалили статью
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('AddCommentForm').should('exist').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length',1);
    });
    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('RatingCard').should('exist').scrollIntoView();
        cy.setRate(5,'feedback');
        cy.get('[data-selected=true]').should('have.length',5);
    });
});