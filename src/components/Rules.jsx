import "./rules.css"

export default function Rules() {
    return (
        <>
            <div className="container">
                <h2>Regeln im Skigebiet</h2>
                Im Skigebiet und auf der Piste halten wir uns selbstverständlich an die geltenden Regeln des Skigebiets. Zusätzlich beachten wir die folgenden einfachen Regeln.

                <div className="rule">
                    <div className="rule-header">
                        4er Gruppen
                    </div>
                    <div className="rule-body">
                        Wir bewegen uns in Gruppen von mindestens 4 Personen, es sei denn, wir befinden uns in einem betreuten Angebot mit Lehrpersonen.

                    </div>
                </div>

                <div className="rule">
                    <div className="rule-header">
                        Helmpflicht
                    </div>
                    <div className="rule-body">
                        Beim Skifahren, Snowboarden oder Schlitteln ist es zu jeder Zeit erforderlich, einen Helm zu tragen.
                    </div>
                </div>

                <div className="rule">
                    <div className="rule-header">
                        Ausrüstung
                    </div>
                    <div className="rule-body">
                        Die Auswahl unserer Ausrüstung ist angemessen auf die jeweilige Aktivität abgestimmt.
                    </div>
                </div>

                <div className="rule">
                    <div className="rule-header">
                        Pünktlichkeit
                    </div>
                    <div className="rule-body">
                        Wir sind zu den angegebenen Zeiten jeweils mit dem Zug oder Bus unterwegs, sodass alles ohne Verzögerung ablaufen kann.
                    </div>
                </div>


            </div>
        </>
    )
}
