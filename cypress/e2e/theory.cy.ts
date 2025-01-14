<<<<<<< HEAD
describe('Пользователь заходит в блок "Теория"', () => {
  beforeEach(() => {
    cy.visit('/theory');
=======
import { selectByTestId } from '../helpers/selectByTestId';

describe('Пользователь заходит в блок "Теория"', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(selectByTestId('Header__Теория')).click();
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.)
  });

  it('И видит содержимое сайдбара, контента, отсутствие ошибки и быстро проходит загрузка', () => {
    cy.getByTestId('Theory__Sidebar').should('exist');
    cy.wait(100);
    cy.getByTestId('TheoryItem').should('exist');
    cy.getByTestId('Loading').should('not.exist');
    cy.getByTestId('ErrorComponent').should('not.exist');
  });

  it('При клике на элемент сайдбара подгружается пдф файл, отсутствует ошибка и быстро проходит загрузка', () => {
    cy.getByTestId('Theory__Sidebar').should('exist');
    cy.getByTestId('Theory__Sidebar__1').click();
    cy.wait(100);
    cy.getByTestId('TheoryItem').should('exist');
    cy.getByTestId('Loading').should('not.exist');
    cy.getByTestId('ErrorComponent').should('not.exist');
  });
});
