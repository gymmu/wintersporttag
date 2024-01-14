import "./times.css"

const sbbTimesBack = [
    {
        city: "Flums",
        platform: "",
        arrival: "",
        departure: "17:18"
    }, {
        city: "Unterterzen",
        platform: "",
        arrival: "",
        departure: "17:33"
    }, {
        city: "Frick",
        platform: "",
        arrival: "19:24",
        departure: ""
    }, {
        city: "Stein-Säckingen",
        platform: "",
        arrival: "19:31",
        departure: ""
    }, {
        city: "Mumpf",
        platform: "",
        arrival: "19:35",
        departure: ""
    }, {
        city: "Möhlin",
        platform: "",
        arrival: "19:42",
        departure: ""
    }, {
        city: "Rheinfelden",
        platform: "",
        arrival: "19:46",
        departure: ""
    }, {
        city: "Kaiseraugst",
        platform: "",
        arrival: "19:52",
        departure: ""
    }, {
        city: "Pratteln",
        platform: "",
        arrival: "19:56",
        departure: ""
    }, {
        city: "Muttenz",
        platform: "",
        arrival: "20:01",
        departure: ""
    }, {
        city: "Basel SBB",
        platform: "",
        arrival: "20:09",
        departure: ""
    }
]
const sbbTimesThere = [
    {
        city: "Basel",
        platform: 9,
        arrival: "",
        departure: "07:22"
    }, {
        city: "Muttenz",
        platform: 4,
        arrival: "07:27",
        departure: "07:28"
    }, {
        city: "Pratteln",
        platform: 5,
        arrival: "07:32",
        departure: "07:34"
    }, {
        city: "Kaiseraugst",
        platform: 3,
        arrival: "07:37",
        departure: "07:39"
    }, {
        city: "Rheinfelden",
        platform: 3,
        arrival: "07:43",
        departure: "07:45"
    }, {
        city: "Möhlin",
        platform: 3,
        arrival: "07:48",
        departure: "07:56"
    }, {
        city: "Mumpf",
        platform: 2,
        arrival: "08:01",
        departure: "08:03"
    }, {
        city: "Stein-Säckingen",
        platform: 2,
        arrival: "08:07",
        departure: "08:14"
    }, {
        city: "Frick",
        platform: 2,
        arrival: "08:20",
        departure: "08:23"
    }, {
        city: "Unterterzen",
        platform: "",
        arrival: "10:26",
        departure: "10:31"
    }, {
        city: "Flums",
        platform: "",
        arrival: "10:38",
        departure: ""
    }
]

function TimeEntry({ entry }) {
    return (
        <li className="time-entry">
            <span>{entry.city}</span>
            <span className="arrival-departure">
                {entry.arrival && <span>an: {entry.arrival}</span>}
                {entry.departure && <span>ab: {entry.departure}</span>}
            </span>
            <span>Gleis: {entry.platform}</span>
        </li>
    )
}

export default function Times() {
    return (
        <>
            <h2>Fahrplan SBB Hinfahrt</h2>
            <ul className="timetable">
                {sbbTimesThere.map(entry => <TimeEntry entry={entry} />)}
            </ul>
        </>
    )
}
