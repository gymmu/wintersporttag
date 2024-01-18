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
            <div className="container">

                Die Abfahrtszeiten sind teilweise sehr knapp und es ist nicht immer genügend Platz für alle Wagen auf dem Bahnsteig vorhanden. Daher ist es äusserst wichtig, dass Sie pünktlich vor Ort sind, schnell einsteigen und sicherstellen, in welchen Wagen Sie müssen.

                <div className="timetable">
                    <h2>Fahrplan SBB Hinfahrt</h2>
                    <ul >
                        {sbbTimesThere.map(entry => <TimeEntry entry={entry} />)}
                    </ul>
                </div>

                <div className="spacer"> </div>

                <div className="timetable">
                    <h2>Fahrplan SBB Rückfahrt</h2>
                    <ul>
                        {sbbTimesBack.map(entry => <TimeEntry entry={entry} />)}
                    </ul>
                </div>

                <div className="spacer"> </div>

                <h2>Bergfahrt</h2>
                Füllen Sie die Gondeln und Postautos schnell und vollständig, um einen reibungslosen Betrieb zu gewährleisten.

                <h2>Talfahrt</h2>
                Stellen Sie sicher, dass Sie die Talfahrt pünktlich antreten, damit niemand den Zug verpasst. Um langes Anstehen und Engpässe zu vermeiden, ist es wichtig, dass alle rechtzeitig erscheinen. Befolgen Sie bitte den folgenden Plan.

                <h4>Schlitten ab Tannenheim</h4>
                <div>
                    Es stehen Postautos in Tannenheim zur Verfügung, die um <strong>16:30 Uhr</strong> abfahren. Bitte seien Sie pünktlich und füllen Sie alle Postautos aus.
                </div>

                <h4>Ski und Snowboard ab Tannenboden</h4>
                Um lange Wartezeiten an der Gondel zu vermeiden, befolgen Sie bitte den folgenden Plan.

                <div className="downhill-times">
                    <div className="downhill-col">
                        <span>16:05 Uhr</span>
                        <span>1AM</span>
                        <span>1B</span>
                        <span>1BL</span>
                        <span>1E</span>
                        <span>1IS</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:10 Uhr</span>
                        <span>1Wa</span>
                        <span>1Wb</span>
                        <span>1Wd</span>
                        <span>1Z</span>
                        <span>F1a</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:15 Uhr</span>
                        <span>F1b</span>
                        <span>F1c</span>
                        <span>F1d</span>
                        <span>2AW</span>
                        <span>2B</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:20 Uhr</span>
                        <span>2Ea</span>
                        <span>2Eb</span>
                        <span>2IS</span>
                        <span>2LMZ</span>
                        <span>2Wa</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:25 Uhr</span>
                        <span>2Wb</span>
                        <span>F2a</span>
                        <span>F2b</span>
                        <span>F2c</span>
                        <span>F2d</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:30 Uhr</span>
                        <span>3A</span>
                        <span>3B</span>
                        <span>3E</span>
                        <span>3ILS</span>
                        <span>3MZ</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:35 Uhr</span>
                        <span>F2e</span>
                        <span>3Wa</span>
                        <span>3Wb</span>
                        <span>F3a</span>
                        <span>F3b</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:40 Uhr</span>
                        <span>F3c</span>
                        <span>F3d</span>
                        <span>4AB</span>
                        <span>4B</span>
                        <span>4E</span>
                    </div>
                    <div className="downhill-col">
                        <span>16:45 Uhr</span>
                        <span>4ILS</span>
                        <span>4MZ</span>
                        <span>4W</span>
                        <span>P1a</span>
                        <span>P1b</span>
                    </div>
                </div>
            </div>
        </>
    )
}
