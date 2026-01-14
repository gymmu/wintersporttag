import "./times.css";

const sbbTimesBack = [
  {
    city: "Flums",
    platform: "",
    arrival: "",
    departure: "16:46",
  },
  {
    city: "Unterterzen",
    platform: "",
    arrival: "",
    departure: "17:03",
  },
  {
    city: "Frick",
    platform: "",
    arrival: "18:48",
    departure: "",
  },
  {
    city: "Stein-Säckingen",
    platform: "",
    arrival: "18:56",
    departure: "",
  },
  {
    city: "Mumpf",
    platform: "",
    arrival: "19:05",
    departure: "",
  },
  {
    city: "Möhlin",
    platform: "",
    arrival: "19:12",
    departure: "",
  },
  {
    city: "Rheinfelden",
    platform: "",
    arrival: "19:17",
    departure: "",
  },
  {
    city: "Kaiseraugst",
    platform: "",
    arrival: "19:23",
    departure: "",
  },
  {
    city: "Pratteln",
    platform: "",
    arrival: "19:29",
    departure: "",
  },
  {
    city: "Muttenz",
    platform: "",
    arrival: "19:40",
    departure: "",
  },
  {
    city: "Basel SBB",
    platform: "",
    arrival: "19:50",
    departure: "",
  },
];
const sbbTimesThere = [
  {
    city: "Basel",
    platform: 8,
    arrival: "",
    departure: "07:20",
  },
  {
    city: "Muttenz",
    platform: 4,
    arrival: "07:26",
    departure: "07:31",
  },
  {
    city: "Pratteln",
    platform: 5,
    arrival: "07:35",
    departure: "07:37",
  },
  {
    city: "Kaiseraugst",
    platform: 5,
    arrival: "07:41",
    departure: "07:50",
  },
  {
    city: "Rheinfelden",
    platform: 3,
    arrival: "07:55",
    departure: "07:57",
  },
  {
    city: "Möhlin",
    platform: 3,
    arrival: "08:01",
    departure: "08:02",
  },
  {
    city: "Mumpf",
    platform: 2,
    arrival: "08:08",
    departure: "08:09",
  },
  {
    city: "Stein-Säckingen",
    platform: 2,
    arrival: "08:13",
    departure: "08:15",
  },
  {
    city: "Frick",
    platform: 2,
    arrival: "08:21",
    departure: "08:23",
  },
  {
    city: "Unterterzen",
    platform: "",
    arrival: "10:27",
    departure: "",
  },
  {
    city: "Flums",
    platform: "",
    arrival: "10:38",
    departure: "",
  },
];

const trainComposition = [
  [
    { klasse: "F2a", lp: "Gm" },
    { klasse: "1Wb", lp: "Tx" },
    { klasse: "F3a", lp: "Gr" },
    { klasse: "F3d", lp: "Sc" },
  ],
  [
    { klasse: "F1c", lp: "Mo" },
    { klasse: "F1a", lp: "Kä" },
    { klasse: "3AM", lp: "Sf" },
    { klasse: "2AB", lp: "Nu" },
  ],
  [
    { klasse: "3BL", lp: "Hf" },
    { klasse: "F1b", lp: "Lö/Sg" },
    { klasse: "2E", lp: "Ry" },
    { klasse: "F2d", lp: "Ha" },
  ],
  [
    { klasse: "3Wa", lp: "Bb" },
    { klasse: "F1d", lp: "Jc/Sm" },
    { klasse: "1AW", lp: "Mx" },
    { klasse: "4LMZ", lp: "He" },
  ],
  [
    { klasse: "F3b", lp: "Kc" },
    { klasse: "2Wb", lp: "Mb" },
    { klasse: "3Z", lp: "En" },
    { klasse: "2Wa", lp: "Ru" },
  ],
  [
    { klasse: "1SZ", lp: "Rd/Gs" },
    { klasse: "1B", lp: "Hz/MG" },
    { klasse: "Schulleitung", lp: "Admin" },
    { klasse: "LP", lp: "20" },
  ],
  [
    { klasse: "3E", lp: "Bc" },
    { klasse: "F2b", lp: "Kr" },
    { klasse: "1BI", lp: "Sk" },
    { klasse: "3Wd", lp: "Ta" },
  ],
  [
    { klasse: "F3c", lp: "Hr" },
    { klasse: "F2c", lp: "22" },
    { klasse: "1Wa", lp: "20" },
    { klasse: "4IS", lp: "13" },
  ],
  [
    { klasse: "4AW", lp: "Ga" },
    { klasse: "2B", lp: "Pa" },
    { klasse: "1E", lp: "Kw/Kn" },
    { klasse: "2IS", lp: "Rf" },
  ],
  [
    { klasse: "3IS", lp: "Co" },
    { klasse: "4Wb", lp: "Aw" },
    { klasse: "4Ea", lp: "Fi" },
    { klasse: "2MZ", lp: "Ly" },
  ],
  [
    { klasse: "3B", lp: "Sw" },
    { klasse: "3Wb", lp: "Hs" },
    { klasse: "4Eb", lp: "Gl" },
    { klasse: "4B", lp: "Km" },
    { klasse: "4Wa", lp: "Fx" },
  ],
];

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
  );
}

function TrainCompositionEntry({ entry }) {
  return entry.map((e) => (
    <div className="class-and-lp">
      <span>{e.klasse}</span>
      <span>{e.lp}</span>
    </div>
  ));
}

export default function Times() {
  return (
    <>
      <div className="container">
        <div className="inset">
          Die Abfahrtszeiten sind teilweise sehr knapp und es ist nicht immer
          genügend Platz für alle Wagen auf dem Bahnsteig vorhanden. Daher ist
          es äusserst wichtig, dass Sie pünktlich vor Ort sind, schnell
          einsteigen und sicherstellen, in welchen Wagen Sie müssen.
        </div>

        <div className="timetable">
          <h2>Fahrplan SBB Hinfahrt</h2>
          <ul>
            {sbbTimesThere.map((entry) => (
              <TimeEntry entry={entry} />
            ))}
          </ul>
        </div>

        <div className="spacer"> </div>

        <div className="train-composition">
          <h2>Zusammensetzung des Zugs</h2>

          <div className="inset">
            Die Perrons in Muttenz, Pratteln, Kaiseraugst und Mumpf sind zu
            kurz, daher bleiben die Wagen 8-11 geschlossen. Steigen Sie deshalb
            im Wagen 7 ein und gehen Sie so rasch wie möglich zu Ihrem Wagen,
            sodass keine Verzögerungen entstehen.
          </div>

          {trainComposition.map((entry, index) => {
            return (
              <div className="traincomposition-row">
                <span>W{index + 1}</span>
                <div className="waggon-composition">
                  <TrainCompositionEntry entry={entry} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="spacer"> </div>

        <div className="timetable">
          <h2>Fahrplan SBB Rückfahrt</h2>
          <ul>
            {sbbTimesBack.map((entry) => (
              <TimeEntry entry={entry} />
            ))}
          </ul>
        </div>

        <div className="spacer"> </div>

        <h2>Bergfahrt</h2>
        <div className="inset">
          Füllen Sie die Gondeln und Postautos schnell und vollständig, um einen
          reibungslosen Betrieb zu gewährleisten.
        </div>

        <h2>Talfahrt</h2>
        <div className="inset">
          Stellen Sie sicher, dass Sie die Talfahrt pünktlich antreten, damit
          niemand den Zug verpasst. Um langes Anstehen und Engpässe zu
          vermeiden, ist es wichtig, dass alle rechtzeitig erscheinen. Befolgen
          Sie bitte den folgenden Plan.
        </div>

        <h4>Schlitten ab Tannenheim</h4>
        <div className="inset">
          Es stehen Postautos in Tannenheim zur Verfügung, die um{" "}
          <strong>16:00 Uhr</strong> abfahren. Bitte seien Sie pünktlich und
          füllen Sie alle Postautos aus.
        </div>

        <h4>Ski und Snowboard ab Tannenboden</h4>
        <div className="inset">
          Um lange Wartezeiten an der Gondel zu vermeiden, befolgen Sie bitte
          den folgenden Plan.
        </div>

        <div className="downhill-times">
          <div className="downhill-col">
            <span>15:55 Uhr</span>
            <span>1AW</span>
            <span>1B</span>
            <span>1BI</span>
            <span>1E</span>
            <span>1SZ</span>
          </div>
          <div className="downhill-col">
            <span>16:00 Uhr</span>
            <span>1Wa</span>
            <span>1Wb</span>
            <span>F1a</span>
            <span>F1b</span>
            <span>F1c</span>
          </div>
          <div className="downhill-col">
            <span>16:05 Uhr</span>
            <span>F1d</span>
            <span>2AB</span>
            <span>2B</span>
            <span>2E</span>
            <span>2IS</span>
          </div>
          <div className="downhill-col">
            <span>16:10 Uhr</span>
            <span>2MZ</span>
            <span>2Wa</span>
            <span>2Wb</span>
            <span>F2a</span>
            <span>F2b</span>
          </div>
          <div className="downhill-col">
            <span>16:15 Uhr</span>
            <span>F2c</span>
            <span>F2d</span>
            <span>F3a</span>
            <span>F3b</span>
            <span>F3c</span>
          </div>
          <div className="downhill-col">
            <span>16:20 Uhr</span>
            <span>F3d</span>
            <span>3AM</span>
            <span>3B</span>
            <span>3BL</span>
            <span>3E</span>
          </div>
          <div className="downhill-col">
            <span>16:25 Uhr</span>
            <span>3IS</span>
            <span>3Wa</span>
            <span>3Wb</span>
            <span>3Wd</span>
            <span>3Z</span>
          </div>
          <div className="downhill-col">
            <span>16:30 Uhr</span>
            <span>4AW</span>
            <span>4B</span>
            <span>4Ea</span>
            <span>4Eb</span>
            <span>4IS</span>
          </div>
          <div className="downhill-col">
            <span>16:35 Uhr</span>
            <span>4LMZ</span>
            <span>4Wa</span>
            <span>4Wb</span>
          </div>
        </div>
      </div>
    </>
  );
}
