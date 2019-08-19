import { useState } from 'react';

export const eventsInitialVal = [];

export const useEvents = (initialVal) => {
    const [events, setEvents] = useState(initialVal);

    handleEventsChange = newEvents => {
        setEvents(newEvents);
    }

    console.log(handleEventsChange);

    return { events, handleEventsChange };
}