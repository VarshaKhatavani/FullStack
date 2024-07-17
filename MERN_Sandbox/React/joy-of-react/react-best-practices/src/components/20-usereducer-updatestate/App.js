import React from 'react';

import updateState from './updateState';

function TestResult({ index, input, expected, actual }) {
  const expectedString = JSON.stringify(expected, null, 2);
  const actualString = JSON.stringify(actual, null, 2);

  const isPristine = actual === input;
  const isCorrect =
    !isPristine &&
    expectedString.trim() === actualString.trim();

  const status = isPristine
    ? 'pristine'
    : isCorrect
    ? 'correct'
    : 'incorrect';
  
  return (
    <li className="test-result">
      <header className={`${status}`}>
        <h2>Result</h2>
        {status === 'correct' && '✅ You did it!'}
        {status === 'incorrect' && '🚫 Not right'}
      </header>
      <div className="row">
        <div className="col">
          <h3>Expected:</h3>
          <div className="box">{expectedString}</div>
        </div>
        <div className="col">
          <h3>Actual:</h3>
          <div className={`box ${status}`}>{actualString}</div>
        </div>
      </div>
    </li>
  );
}

const expected = [
  {
    eventId: 'coffee-with-samantha',
    date: '2023-01-01T12:30:00.000Z',
    metadata: {
      invitees: [
        {
          name: 'Samantha',
          email: 'samboombox123@aol.com',
        },
      ],
    },
  },
  {
    eventId: 'focus-time',
    date: '2023-01-01T15:00:00.000Z',
    metadata: {
      notes: 'Time for me to focus!',
    },
  },
  {
    eventId: 'team-meeting',
    date: '2023-01-02T10:00:00.000Z',
    metadata: {
      notes: 'Weekly team catch-up call!',
      invitees: [
        {
          name: 'Sadb Fabian',
          email: 'sfabian@widgetco.com',
        },
        {
          name: 'Sagit Edvaldo',
          email: 'sedvaldo@widgetco.com',
        },
        {
          name: 'Denis Seppo',
          email: 'dseppo@widgetco.com',
        },
      ],
    },
  },
];

const input = Object.freeze([
  Object.freeze({
    eventId: 'coffee-with-samantha',
    date: '2023-01-01T12:30:00.000Z',
    metadata: Object.freeze({
      invitees: Object.freeze([
        Object.freeze({
          name: 'Samantha',
          email: 'samboombox123@aol.com',
        }),
      ]),
    }),
  }),
  Object.freeze({
    eventId: 'focus-time',
    date: '2023-01-01T15:00:00.000Z',
    metadata: Object.freeze({
      notes: 'Time for me to focus!',
    }),
  }),
  Object.freeze({
    eventId: 'team-meeting',
    date: '2023-01-02T10:00:00.000Z',
    metadata: Object.freeze({
      notes: 'Weekly team catch-up call!',
      invitees: Object.freeze([
        Object.freeze({
          name: 'Sadb Fabian',
          email: 'sfabian@widgetco.com',
        }),
        Object.freeze({
          name: 'Gerarda Nicomedes',
          email: 'gnicomedes@widgetco.com',
        }),
        Object.freeze({
          name: 'Sagit Edvaldo',
          email: 'sedvaldo@widgetco.com',
        }),
        Object.freeze({
          name: 'Denis Seppo',
          email: 'dseppo@widgetco.com',
        }),
      ]),
    }),
  }),
]);

function App() {
  const actual = updateState(input || null);

  return (
    <ul className="test-list">
      <TestResult
        input={input}
        expected={expected}
        actual={actual}
      />
    </ul>
  );
}

export default App;