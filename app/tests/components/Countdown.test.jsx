var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('HandleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // Check count down 1 after 1 second
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                // Call done let mocha know we done and check test
                done();
            }, 1001);
        });

        it('should never set count less than 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            // Check count is 0 even we pass 3 seconds from 1
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                // Call done let mocha know we done and check test
                done();
            }, 3001);
        });
    });
});