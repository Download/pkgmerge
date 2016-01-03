var pkgmerge = require('../pkgmerge');
var expect = require('chai').expect;

describe('pkgmerge', function(){
	it('is a function', function(){
		expect(pkgmerge).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgmerge()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgmerge('keywords')).to.be.an('array');
		expect(pkgmerge(['keywords'])).to.be.an('array');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgmerge();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgmerge');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var keywords = pkgmerge('keywords');
		expect(keywords).to.be.an('array');
	});
});