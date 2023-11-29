import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, 'hours').toDate(),
            title: 'Sample Event',
        },
    ]);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('Yeni etkinlik için bir başlık girin');
        if (title) {
            setEvents(prevEvents => [
                ...prevEvents,
                { start, end, title },
            ]);
        }
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelect}
                selectable
                style={{ height: 400 }}
            />
        </div>
    );
};

export default MyCalendar;
