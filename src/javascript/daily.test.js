import compareTwo from './daily.js'

test('sheer heart attack', () => {
	//fail
	// expect(compareTwo("oink","arf")).toBe(true);
	//pass
	expect(compareTwo("arf","arf")).toBe(true);
  expect(compareTwo(1,2)).toBe(false);
  expect(compareTwo(2,1)).toBe(false);
  expect(compareTwo(4,4)).toBe(true);
});