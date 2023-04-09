import {multiply, filterByAirline} from '../src/utils/filter';
import {flightList} from '../src/utils/dataObj';

describe('multiply tests', () => {
  it('filter by airline', async () => {
    const result = await filterByAirline(flightList, 'AB');
    expect(result[0].airlineCode).toBe('AB');
  });
});
