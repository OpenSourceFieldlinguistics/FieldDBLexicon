'use strict';

describe('Directive: fielddbLexiconNodes', function () {

  // load the directive's module
  beforeEach(module('fielddbLexiconAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fielddb-lexicon-nodes></fielddb-lexicon-nodes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fielddbLexiconNodes directive');
  }));
});
