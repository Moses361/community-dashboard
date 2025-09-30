const events = [
  { name: "Kickoff Meeting", date: "April 10", location: "Conference Room" },
  { name: "Design Review", date: "April 20", location: "Zoom" },
  { name: "Sprint Planning", date: "May 2", location: "Office" },
  { name: "Demo Day", date: "May 15", location: "Main Hall" },
];

function Events() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <ul>
          {events.map((event, idx) => (
            <li key={idx} className="mb-4">
              <div className="font-semibold">{event.name}</div>
              <div className="text-gray-500 text-sm">
                {event.date} &middot; {event.location}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;