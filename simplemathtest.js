describe("simpleMath",function(){
	var simpleMath;
	beforeEach(function(){
	simpleMath=new SimpleMath();
	});
	describe(" when simplemath is used to find factorial ",function(){
	it(" should be able to find factorial for positive number ",function(){
	expect(simpleMath.getFactorial(3)).toEqual(6);
	});

	it(" should be able to find factorial for zero number ",function(){
	expect(simpleMath.getFactorial(0)).toEqual(1);
	});


	it(" should be able to throw exception when num is negative ",function(){
	expect(function(){
	simpleMath.getFactorial(-10)

	}).toThrowError("there is no factorial for negative numbers");
	});
	});
	});
