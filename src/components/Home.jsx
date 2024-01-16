import "./home.css"

export default function Home() {
    return (
        <>
            <div className="container">
                <h2>Aktivitäten im Skigebiet</h2>

                <div className="activity">
                    <div className="activity-header">
                        Skifahren, Snowboarden
                    </div>
                    <div className="activity-body">
                        Steigen Sie in Unterterzen aus und nehmen Sie die Gondelbahn nach Tannenboden, um Ski oder Snowboard zu fahren. Im Skigebiet können Sie sich in Gruppen von mindestens 4 Personen frei bewegen. Wenn Sie etwas dazulernen möchten, schauen Sie in den <a href="#angebote-vor-ort">Angeboten vor Ort</a> nach passenden Möglichkeiten.
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        Schlitteln
                    </div>
                    <div className="activity-body">
                        Für das Schlittenfahren nehmen Sie den Zug bis nach Flums und steigen dort in das Postauto um. Das Postauto bringt Sie nach Tannenheim, von wo aus Sie mit der Gondel auf die Prodalp gelangen, wo sich die Schlittelstrecke befindet.
                        <div>
                            <div className="table-2">
                                <div className="column">
                                    <div className="col-header">
                                        Mit Helm
                                    </div>
                                    <div>
                                        Wer bereits einen Helm besitzt, kann den Schlitten direkt oben auf der Prodalp ausleihen.
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="col-header">
                                        Ohne Helm
                                    </div>
                                    <div>
                                        Schlitten und Helme können im Intersport in Tannenheim gemietet werden, für diejenigen, die noch keinen Helm besitzen.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="spacer"></div>

                <h2 id="angebote-vor-ort">Angebote vor Ort</h2>

                <div className="activity">
                    <div className="activity-header">
                        Wandern Flumserberg Tannenboden - Seeben
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Begleite uns auf einer atemberaubenden Wanderung entlang einer malerischen Strecke von insgesamt 8 Kilometern - hin und zurück. Geniesse die unberührte Natur und erlebe die Schönheit der Landschaft hautnah. Doch das ist noch nicht alles! Auf halber Strecke erwartet dich das Restaurant Seeben Bad, ein wahres Juwel mit einer wunderschönen, ruhigen Sonnenterrasse. Hier kannst du dich entspannen und die Sonne auf deiner Haut spüren, während du den Blick über den glitzernden See schweifen lässt. Lass dich von der herzlichen Atmosphäre und dem köstlichen Essen verwöhnen, bevor du gestärkt den Rückweg antrittst. Diese Wanderung ist ein absolutes Muss für Naturliebhaber und Geniesser gleichermassen. Komm mit und erlebe unvergessliche Momente inmitten der Natur!
                        </div>
                        <div className="activity-teacher">
                            M. Stöcklin
                        </div>
                        <div className="activity-meeting">
                            11:15 Uhr Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        Wandern Flumserberg Maschgenkamm – Panüöl - Prodalp
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Begleiten Sie uns auf einer atemberaubenden Wanderung entlang des 8 km langen Panoramawegs, der spektakuläre Ausblicke bietet. Genießen Sie die malerische Landschaft und lassen Sie sich von der Schönheit der Natur verzaubern. Nach der Wanderung erwartet Sie ein weiteres Highlight: eine entspannte Talfahrt mit der Seilbahn. Lehnen Sie sich zurück und lassen Sie sich von der beeindruckenden Aussicht auf dem Weg hinunter ins Tal begeistern.
                        </div>
                        <div className="activity-teacher">
                            K. Leiva, G. Schaller, B. Jäggi
                        </div>
                        <div className="activity-meeting">
                            11:15 Uhr Tannenheim (im Anschluss an Busfahrt)
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-header">
                        Wandern Flumserberg Maschgenkamm – Panüöl - Prodalp
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Erleben Sie eine atemberaubende Bergfahrt mit der Seilbahn und begleiten Sie anschliessend unsere Gruppe auf einer malerischen Panoramawanderung zurück nach Prodalp oder Tannenheim. Tauchen Sie ein in die Schönheit der Natur und geniessen Sie unvergessliche Ausblicke auf die umliegende Berglandschaft. Kommen Sie mit uns auf dieses unvergessliche Abenteuer und lassen Sie sich von der Magie der Berge verzaubern.
                        </div>
                        <div className="activity-teacher">
                            A. Kessler, W. Käch
                        </div>
                        <div className="activity-meeting">
                            11:30h Bergstation Maschgenkamm (im Anschluss an Bergfahrt)
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-header">
                        Skifahren mit fortgeschrittenen Anfänger:innen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Treffpunkt Tannenboden; Betreuung 11:00h bis 13:00
                        </div>
                        <div className="activity-teacher">
                            S. Kulka
                        </div>
                        <div className="activity-meeting">
                            11:15h Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-header">
                        Skifahren mit Fortgeschrittenen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Treffpunkt Maschgenkamm; Betreuung am Anfang und dann nach Absprache
                        </div>
                        <div className="activity-teacher">
                            R. Morf
                        </div>
                        <div className="activity-meeting">
                            11:30h Bergstation Maschgenkamm (im Anschluss an Bergfahrt)
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-header">
                        Snowboard mit fortgeschrittenen Anfänger:innen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Treffpunkt Tannenboden; Betreuung am Anfang und dann nach Absprache
                        </div>
                        <div className="activity-teacher">
                            J. Gees
                        </div>
                        <div className="activity-meeting">
                            11:15h Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="activity-header">
                        Snowboard mit Fortgeschrittenen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Treffpunkt Maschgenkamm; Betreuung am Anfang und dann nach Absprache
                        </div>
                        <div className="activity-teacher">
                            C. Geissmann
                        </div>
                        <div className="activity-meeting">
                            11:30h Bergstation Maschgenkamm (im Anschluss an Bergfahrt)
                        </div>
                    </div>
                </div>




                <div className="activity">
                    <div className="activity-header">
                        Langlauf
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Betreuung nach Absprache
                        </div>
                        <div className="activity-teacher">
                            A. Marbacher, B. Grossmann, A. Kaech, S. Schraudolf
                        </div>
                        <div className="activity-meeting">
                            Nach Absprache (Interessierte melden sich bei den LP)
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
