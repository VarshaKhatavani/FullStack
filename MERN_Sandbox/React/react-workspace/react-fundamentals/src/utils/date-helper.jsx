// used in component 03-render message

import { format } from "date-fns";
/*
  This convenient helper function takes an
  ISO date string, and formats it like:
  
  March 14th, 2024 at 11:09 AM
*/
export function formatDate(date) {
  return format(new Date(date), "MMMM do 'at' hh:mm b");
}
