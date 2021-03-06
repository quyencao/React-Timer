var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('Render', () => {
        // Test if countdownStatus is started => pause button render
        it('should render pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);

            var $el = $(ReactDOM.findDOMNode(controls));

            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        // Test if countdownStatus is paused => start button render
        it('should render start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);

            var $el = $(ReactDOM.findDOMNode(controls));

            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});