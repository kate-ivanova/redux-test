/* eslint no-unused-expressions: 0 */
import visibilityFilter from '../VisibilityFilter';

describe('visibilityFilter test', () => {
  it('returns default filter', () => {
    expect(visibilityFilter()).to.be.eql('ALL');
  });
});
