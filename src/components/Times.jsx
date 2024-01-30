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

const trainComposition = [
    [{ klasse: "F2d", lp: "Ke" }, { klasse: "F3a", lp: "Lö" }, { klasse: "F3b", lp: "Kr" }, { klasse: "F3d", lp: "Lv" }],
    [{ klasse: "F2a", lp: "Mo" }, { klasse: "F2b", lp: "BP" }, { klasse: "F2c", lp: "Vb" }, { klasse: "F2e", lp: "Kä" }],
    [{ klasse: "1BL", lp: "Hi" }, { klasse: "F1b", lp: "Hu" }, { klasse: "2AW", lp: "Ga/17" }, { klasse: "2IS", lp: "MF/18" }],
    [{ klasse: "1B", lp: "Re" }, { klasse: "1E", lp: "Re" }, { klasse: "F1a", lp: "Gr" }, { klasse: "3A", lp: "Rt" }],
    [{ klasse: "1IS", lp: "Sd" }, { klasse: "F1c", lp: "Sd" }, { klasse: "2Ea", lp: "Fi" }, { klasse: "2Eb", lp: "Gl" }],
    [{ klasse: "1Z", lp: "Ld" }, { klasse: "3MZ", lp: "Ge" }, { klasse: "F3c", lp: "Mh" }, { klasse: "Schulleitung", lp: "Admin & LP" }],
    [{ klasse: "1AM", lp: "Hp" }, { klasse: "1Wd", lp: "Dg" }, { klasse: "F1d", lp: "Sc" }, { klasse: "3B", lp: "Bx" }, { klasse: "4W", lp: "Br" }],
    [{ klasse: "1Wb", lp: "Et" }, { klasse: "2Wa", lp: "Wl" }, { klasse: "3ILS", lp: "Et" }, { klasse: "4E", lp: "Mb" }],
    [{ klasse: "1Wa", lp: "Bb" }, { klasse: "4AB", lp: "Ry" }, { klasse: "4ILS", lp: "NN" }, { klasse: "4MZ", lp: "Nu" }],
    [{ klasse: "2LMZ", lp: "NN" }, { klasse: "2Wb", lp: "Aw" }, { klasse: "3E", lp: "Mx" }, { klasse: "3Wa", lp: "Sk" }],
    [{ klasse: "2B", lp: "Kn" }, { klasse: "3Wb", lp: "Ft" }, { klasse: "4B", lp: "Rf" }, { klasse: "P1b", lp: "Hx" }, { klasse: "P1a", lp: "Va" }],
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

function TrainCompositionEntry({ entry }) {
    return entry.map(e => (
        <div className="class-and-lp">
            <span>{e.klasse}</span>
            <span>{e.lp}</span>
        </div>
    )
    )
}

export default function Times() {
    return (
        <>
            <div className="container">

                <div className="inset">
                Die Abfahrtszeiten sind teilweise sehr knapp und es ist nicht immer genügend Platz für alle Wagen auf dem Bahnsteig vorhanden. Daher ist es äusserst wichtig, dass Sie pünktlich vor Ort sind, schnell einsteigen und sicherstellen, in welchen Wagen Sie müssen.
                </div>

                <div className="timetable">
                    <h2>Fahrplan SBB Hinfahrt</h2>
                    <ul >
                        {sbbTimesThere.map(entry => <TimeEntry entry={entry} />)}
                    </ul>
                </div>

                <div className="spacer"> </div>

                <div className="train-composition">
                    <h2>Zusammensetzung des Zugs</h2>

                    <div className="inset">
                        Die Perrons in Muttenz, Pratteln, Kaiseraugst und Mumpf sind zu kurz, daher bleiben die Wagen 8-11 geschlossen. Steigen Sie deshalb im Wagen 7 ein und gehen Sie so rasch wie möglich zu Ihrem Wagen, sodass keine Verzögerungen entstehen.
                    </div>

                    {trainComposition.map((entry, index) => {
                        return <div className="traincomposition-row">
                            <span>W{index + 1}</span>
                            <div className="waggon-composition">
                                <TrainCompositionEntry entry={entry} />
                            </div>
                        </div>
                    }

                    )}
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
                <div className="inset">
                Füllen Sie die Gondeln und Postautos schnell und vollständig, um einen reibungslosen Betrieb zu gewährleisten.
                </div>

                <h2>Talfahrt</h2>
                <div className="inset">
                Stellen Sie sicher, dass Sie die Talfahrt pünktlich antreten, damit niemand den Zug verpasst. Um langes Anstehen und Engpässe zu vermeiden, ist es wichtig, dass alle rechtzeitig erscheinen. Befolgen Sie bitte den folgenden Plan.
                </div>

                <h4>Schlitten ab Tannenheim</h4>
                <div className="inset">
                    Es stehen Postautos in Tannenheim zur Verfügung, die um <strong>16:30 Uhr</strong> abfahren. Bitte seien Sie pünktlich und füllen Sie alle Postautos aus.
                </div>

                <h4>Ski und Snowboard ab Tannenboden</h4>
                <div className="inset">
                Um lange Wartezeiten an der Gondel zu vermeiden, befolgen Sie bitte den folgenden Plan.
                </div>

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
