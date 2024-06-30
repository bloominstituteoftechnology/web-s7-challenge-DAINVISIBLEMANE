import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Sprint 7 Challenge Learner Tests', () => {
  describe('mvpB tests', () => {
    test('true should be true', () => {
      expect(true).toBe(true);
    });
  });
  // ... Your other tests ...

  // Uncomment the test below if you want to use it
  // test('you can comment out this test', () => {
  //   expect(true).toBe(false);
  // });
});

function sum(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    throw new Error('pass valid numbers');
  }
  return a + b;
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  );
}

export { sum, HelloWorld }; // Make sure to export the functions if they are used elsewhere
