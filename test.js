
//test for adding
describe('addValue', function() {
  it('should return the sum of two whole numbers', function() {
    expect(addValue(2, 4)).to.equal(6);
  });

  it('should return the sum of two decimal numbers', function() {
    expect(addValue(2.5, 1.5)).to.equal(4);
  });

  it('should return the sum of a decimal number and a string that is coercible to a number', function() {
    expect(addValue(2.5, '1.5')).to.equal(4);
  });

  it('should return the original total for invalid inputs', function() {
    expect(addValue(4, 'cow')).to.equal(4);
  });
});

//test for subtraction
describe('subValue', function() {
  it('should return the diff of two whole numbers', function() {
    expect(subValue(2, 4)).to.equal(-2);
  });

  it('should return the diff of two decimal numbers', function() {
    expect(subValue(2.5, 1.5)).to.equal(1.0);
  });

  it('should return the diff of a decimal number and a string that is coercible to a number', function() {
    expect(subValue(2.5, '1.5')).to.equal(1.0);
  }); 

  it('should return the original total for invalid inputs', function() {
    expect(subValue(4, 'cow')).to.equal(4);

  });
});

//Test for multiplication
describe('mulValue', function() {
  it('should return the multi of two whole numbers', function() {
    expect(mulValue(2, 4)).to.equal(8);
  });

  it('should return the multi  of two decimal numbers', function() {
    expect(mulValue(2.5, 1.5)).to.equal(3.75);
  });

  it('should return the multi  of a decimal number and a string that is coercible to a number', function() {
    expect(mulValue(2.5, '1.5')).to.equal(3.75);
  });

  it('should return the original total for invalid inputs', function() {
  expect(mulValue(4, 'cow')).to.equal(4);
});

});