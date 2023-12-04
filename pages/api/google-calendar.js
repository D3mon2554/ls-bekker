import axios from "axios";

export async function getPublicGoogleCalendarEvents(calendarId, apiKey) {
  const response = await axios.get(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
  );

  return response.data.items;
}
