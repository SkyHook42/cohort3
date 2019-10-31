// #region - Canadian Taxes
// Canadian Taxes - 2019 data
// Start a new section on the same page as the last exercise.

// add a new heading “Canadian Taxes”
// review https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html#federal
// CRA sometimes uses rounded or imprecise numbers in their sample calculations; in our case we will use exact calculations
// create a wireframe for the user interface to do the tax calculation
// compare each other’s wireframe and incorporate the best ideas into yours
// develop the code thinking about a few new things
// before you start to code, calculate a few results, here a few answers but check to make sure they are correct:

// 	$1.00	⇒	$.15
// 	$2.00	⇒	$.30
// 	$50,000	⇒	$7,630.35
// 	$100,000	⇒	$18,541.11
// 	$150,000	⇒	$31,211.10
// 	$250,000	⇒	$61,796.26

// notice that your requirement has been presented to you in a form of a document from the government website and in form of tests. Do you find the tests helpful?
// remember the process
// write a stub for the function
// write a test that will fail
// run the failing test
// write the code to make the test pass
// repeat until complete
// (refactor - we should talk about this one day)
// do a code review and discuss the merits of each other’s approach
// update your code to use the best approach 
// calculate the effective tax rate (just based on net, the simplest way)
// consider that a few days before the the end of the year you have made $47,620 just $10 away from the next tax bracket and you know it. Your employer asks you to work one more hour and he will pay you double. From a financial perspective should you work the hour? Once you have completed this exercise email Larry or Roman with a considered financial answer. Pretend you are emailing your most important customer and use a business format. Treat the email with all the importance it deserves. 

//-  15% on the first $47,630 of taxable income, plus
// - 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
// - 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to $147,667), plus
// - 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
// - 33% of taxable income over $210,371


const functions = {
	cdnTaxes: (incIn)=>{
    // Canadian Tax calculator - main
    // given bracket roofs are inclusive
		const roofA = 47630;
		const roofB = 95259;
		const roofC = 147667;
    const roofD = 210371;
    // given bracket rates as real number percentages
		const rateA = 15;
		const rateB = 20.5;
		const rateC = 26;
		const rateD = 29;
		const rateE = 33;
		let taxBase = 0;
		let taxSum = 0;

    // find full bracket tax
    // calc remainder tax over highest bracket
    // return full plus remainder to web page
    if (incIn <= roofA){
      console.log("inside roofA if");
      return incIn*functions.pctRate(rateA);
    } else if (incIn <= roofB){
      console.log("inside roofB if");
      return incIn*functions.pctRate(rateB);
    }
    return;
  },

  pctRate: (pctIn)=>{
    // convert readable percentage into algebra decimal
    return pctIn/100;
  },

    // return taxSum;

    // if (incIn >= 0){
    //   taxBase = incIn*rateA;
    //   return taxBase ;
		// }
		// if (incIn > roofA){
		// 	taxBase = taxBase+(roofA*rateA);
    //   b2 = taxBase+((incIn-roofA)*rateB);
    //   return 0;
		// }
		// if (incIn > roofB){
		// 	taxBase = taxBase+((roofB-roofA)*rateB);
		// 	taxSum = taxBase+((incIn-roofB)*rateC);
		// }
		// if (incIn > roofC){
		// 	taxBase = taxBase+((roofC-roofB)*rateC);
		// 	taxSum = taxBase+((incIn-roofC)*rateD);
		// }
		// if (incIn > roofD){
		// 	taxBase = taxBase+((roofD-roofC)*rateD);
		// 	taxSum = taxBase+((incIn-roofD)*rateE);
		// }
		// console.log(taxSum);

	// convertPctDec: ()=>{
	// 	console.log("inside convertPctDec");
	// },

	size: (num) => {
		if (num < 0) return "negative";
		if (num < 10) return "small";
		if (num < 20) return "medium";
		return "large";
	},

	add: (num1, num2) => {
		return num1 + num2;
	},

	subtract: (num1, num2) => {
		return num1 - num2;
	}
};

export default functions;