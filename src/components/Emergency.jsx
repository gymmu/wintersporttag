export default function Emergency() {
    return (
        <>
            <div className="container">
                <h2>Verhalten im Notfall</h2>
                <div>
                    Bei jeglicher Art von Unfällen ist der{" "}
                    <strong>Schulposten auf der Prodalp</strong>, sowie die{" "}
                    <strong>SOS Flumserberge</strong> direkt zu kontaktieren.
                    Der Schulposten leitet dann das weitere Vorgehen in die
                    Wege.
                </div>

                <div className="emergency-numbers">
                    <div>
                        <span>Schulposten Prodalp</span>
                        <span>077 455 23 38</span>
                    </div>

                    <div>
                        <span>SOS Flumserberg</span>
                        <span>081 720 15 19</span>
                    </div>
                </div>

                <div className="spacer"></div>

                <h2>Zug verpasst?</h2>
                <h4>Hinreise</h4>
                <div>
                    Melden Sie sich umgehend bei Ihrer Klassenlehrperson, damit
                    das weitere Vorgehen besprochen werden kann.
                </div>

                <h4>Rückreise</h4>
                <div>
                    Sollten Sie es nicht rechtzeitig zum Zug schaffen,
                    informieren Sie bitte umgehend Ihre Klassenlehrpersonen und
                    melden Sie sich beim Schulposten. Diese werden es dann an
                    die Lehrpersonen LP1 und LP2 weiterleiten, die eine betreute
                    Rückreise mit Ihnen organisieren werden. Es ist äusserst
                    wichtig, den Zug nicht zu verpassen.
                </div>
            </div>
        </>
    );
}
