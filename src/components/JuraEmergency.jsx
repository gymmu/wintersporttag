import "./emergency.css";

export default function JuraEmergency() {
  return (
    <>
      <div className="container">
        <h2>Notfall auf der Wanderung</h2>
        Im Falle eines unerwarteten Unfalls sollten Sie folgende Schritte
        befolgen:
        <div className="emergency-table">
          <div className="emergency-entry">
            <div className="emergency-header">Lagerung und Kälteschutz</div>
            <div className="emergency-body">
              Mindestens eine Person sollte bei der verunfallten Person bleiben,
              um sie sicher zu lagern und vor Kälte zu schützen.
            </div>
          </div>
          {/* <div className="emergency-entry">
                        <div className="emergency-header">
                            Schule informieren
                        </div>
                        <div className="emergency-body">
                            Jemand informiert die Schule (061 552 12 00) und reagiert gemäss Absprache.
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
}
