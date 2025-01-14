import "./times.css";

const sbbTimesBack = [
  {
    city: "Flums",
    platform: "",
    arrival: "",
    departure: "17:16",
  },
  {
    city: "Unterterzen",
    platform: "",
    arrival: "",
    departure: "17:33",
  },
  {
    city: "Frick",
    platform: "",
    arrival: "19:24",
    departure: "",
  },
  {
    city: "Stein-Säckingen",
    platform: "",
    arrival: "19:32",
    departure: "",
  },
  {
    city: "Mumpf",
    platform: "",
    arrival: "19:36",
    departure: "",
  },
  {
    city: "Möhlin",
    platform: "",
    arrival: "19:43",
    departure: "",
  },
  {
    city: "Rheinfelden",
    platform: "",
    arrival: "19:56",
    departure: "",
  },
  {
    city: "Kaiseraugst",
    platform: "",
    arrival: "20:03",
    departure: "",
  },
  {
    city: "Pratteln",
    platform: "",
    arrival: "20:08",
    departure: "",
  },
  {
    city: "Muttenz",
    platform: "",
    arrival: "20:13",
    departure: "",
  },
  {
    city: "Basel SBB",
    platform: "",
    arrival: "20:22",
    departure: "",
  },
];
const sbbTimesThere = [
  {
    city: "Basel",
    platform: 8,
    arrival: "",
    departure: "07:22",
  },
  {
    city: "Muttenz",
    platform: 4,
    arrival: "07:27",
    departure: "07:32",
  },
  {
    city: "Pratteln",
    platform: 5,
    arrival: "07:36",
    departure: "07:39",
  },
  {
    city: "Kaiseraugst",
    platform: 5,
    arrival: "07:43",
    departure: "07:44",
  },
  {
    city: "Rheinfelden",
    platform: 3,
    arrival: "07:53",
    departure: "07:54",
  },
  {
    city: "Möhlin",
    platform: 3,
    arrival: "07:58",
    departure: "07:59",
  },
  {
    city: "Mumpf",
    platform: 2,
    arrival: "08:05",
    departure: "08:06",
  },
  {
    city: "Stein-Säckingen",
    platform: 2,
    arrival: "08:10",
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
    arrival: "10:31",
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
    { klasse: "F1a", lp: "Eg" },
    { klasse: "F1b", lp: "Kr" },
    { klasse: "4Wb", lp: "Ft" },
    { klasse: "F2b", lp: "Kc" },
  ],
  [
    { klasse: "F3c", lp: "Vb" },
    { klasse: "F3e", lp: "Kä" },
    { klasse: "2AM", lp: "Sf" },
    { klasse: "F1d", lp: "Ha" },
  ],
  [
    { klasse: "2BL", lp: "Hf" },
    { klasse: "3B", lp: "Km" },
    { klasse: "1B", lp: "Pa" },
    { klasse: "F3b", lp: "BP" },
  ],
  [
    { klasse: "3Wa", lp: "Fx" },
    { klasse: "4ILS", lp: "Et" },
    { klasse: "1E", lp: "Ry" },
    { klasse: "1IM", lp: "Si" },
    { klasse: "2Wa", lp: "Bb" },
  ],
  [
    { klasse: "F2d", lp: "Sc" },
    { klasse: "1Wb", lp: "Rd" },
    { klasse: "1AB", lp: "Nu" },
    { klasse: "2Z", lp: "En" },
  ],
  [
    { klasse: "1Z", lp: "Ly" },
    { klasse: "3Eb", lp: "Gl" },
    { klasse: "1Wa", lp: "Ru" },
    { klasse: "Schulleitung", lp: "Admin & LP" },
  ],
  [
    { klasse: "2B", lp: "Sw" },
    { klasse: "2E", lp: "Bc" },
    { klasse: "F2a", lp: "Gr" },
    { klasse: "F3a", lp: "Mo" },
  ],
  [
    { klasse: "F2c", lp: "Sd" },
    { klasse: "F1c", lp: "Ld" },
    { klasse: "1S", lp: "Rf" },
    { klasse: "4Wa", lp: "Sk" },
  ],
  [
    { klasse: "4MZ", lp: "Ge" },
    { klasse: "3IS", lp: "MF" },
    { klasse: "3AW", lp: "Ga" },
    { klasse: "F3d", lp: "Ke" },
  ],
  [
    { klasse: "3LMZ", lp: "Bi" },
    { klasse: "2IS", lp: "Co" },
    { klasse: "2Wb", lp: "Hs" },
    { klasse: "4B", lp: "Bx" },
  ],
  [
    { klasse: "4E", lp: "Mx" },
    { klasse: "2Wd", lp: "Ta" },
    { klasse: "3Wb", lp: "Aw" },
    { klasse: "4A", lp: "Rt" },
    { klasse: "3Ea", lp: "Fi" },
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
          <strong>16:40 Uhr</strong> abfahren. Bitte seien Sie pünktlich und
          füllen Sie alle Postautos aus.
        </div>

        <h4>Ski und Snowboard ab Tannenboden</h4>
        <div className="inset">
          Um lange Wartezeiten an der Gondel zu vermeiden, befolgen Sie bitte
          den folgenden Plan.
        </div>

        <div className="downhill-times">
          <div className="downhill-col">
            <span>16:15 Uhr</span>
            <span>1AB</span>
            <span>1B</span>
            <span>1E</span>
            <span>1IM</span>
            <span>1S</span>
          </div>
          <div className="downhill-col">
            <span>16:20 Uhr</span>
            <span>1Wa</span>
            <span>1Wb</span>
            <span>1Z</span>
            <span>F1a</span>
            <span>F1b</span>
          </div>
          <div className="downhill-col">
            <span>16:25 Uhr</span>
            <span>F1c</span>
            <span>F1d</span>
            <span>F2a</span>
            <span>F2b</span>
            <span>F2c</span>
          </div>
          <div className="downhill-col">
            <span>16:30 Uhr</span>
            <span>F2d</span>
            <span>2AM</span>
            <span>2B</span>
            <span>2BL</span>
            <span>2E</span>
          </div>
          <div className="downhill-col">
            <span>16:35 Uhr</span>
            <span>2IS</span>
            <span>2Wa</span>
            <span>2Wb</span>
            <span>2Wd</span>
            <span>2Z</span>
          </div>
          <div className="downhill-col">
            <span>16:40 Uhr</span>
            <span>3AW</span>
            <span>3B</span>
            <span>3Ee</span>
            <span>3Eb</span>
            <span>3IS</span>
          </div>
          <div className="downhill-col">
            <span>16:45 Uhr</span>
            <span>3LMZ</span>
            <span>3Wa</span>
            <span>3Wb</span>
            <span>4A</span>
            <span>4B</span>
          </div>
          <div className="downhill-col">
            <span>16:50 Uhr</span>
            <span>F3a</span>
            <span>F3b</span>
            <span>F3c</span>
            <span>F3d</span>
            <span>F3e</span>
          </div>
          <div className="downhill-col">
            <span>16:55 Uhr</span>
            <span>4E</span>
            <span>4ILS</span>
            <span>4MZ</span>
            <span>4Wa</span>
            <span>4Wb</span>
          </div>
        </div>
      </div>
    </>
  );
}
