/*
  Your mission is to update the `team-meeting`
  calendar event so that the second teammate,
  Gerarda Nicomedes, is removed from the list
  of invitees. You are not allowed to mutate
  any arrays or objects.
  
  PRO-TIP: full-screen and resize the “Result” pane
  to see both objects side-by-side, for easier
  debugging.
*/

function updateState(currentState) {
  // Do your work here.
  console.log(currentState);
  return currentState.map((event) => {
    // find team-meeting
    if (event.eventId === "team-meeting") {
      const updatedEvent = {
        ...event,
        metadata: {
          ...event.metadata,
          invitees: event.metadata.invitees.filter(
            (invitee, index) => invitee.email !== "gnicomedes@widgetco.com"
          ),
        }, // metdata-close
      }; // updatedEvent-close
      return updatedEvent;
    } // if-close

    return event;
  });
}

export default updateState;

/** Solution 2 : Using Immer
 * 
  import { produce } from 'immer';

  function updateState(currentState) {
    return produce(currentState, (draftState) => {
      draftState[2].metadata.invitees.splice(1, 1);
    });
  }

  export default updateState;
 */
