import "./home.css";

function Icon({ url }) {
    return <img src={url} />;
}

export default function Home() {
    return (
        <>
            <div className="container">
                <h2>Aktivitäten im Skigebiet</h2>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-ski.svg" />
                        Skifahren, Snowboarden
                        <Icon url="/wintersporttag/logo-activity.svg" />
                    </div>
                    <div className="activity-body">
                        Steigen Sie in Unterterzen aus und nehmen Sie die
                        Gondelbahn nach Tannenboden, um Ski oder Snowboard zu
                        fahren. Im Skigebiet können Sie sich in Gruppen von
                        mindestens 4 Personen frei bewegen. Wenn Sie etwas
                        dazulernen möchten, schauen Sie in den{" "}
                        <a href="#angebote-vor-ort">Angeboten vor Ort</a> nach
                        passenden Möglichkeiten.
                        <div className="spacer"></div>
                        Eine Übersichtskarte mit allen Pisten können Sie{" "}
                        <a href="https://www.flumserberg.ch/download_2818?locale=de">
                            hier
                        </a>{" "}
                        finden.
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-schlitten.svg" />
                        Schlitteln
                    </div>
                    <div className="activity-body">
                        <div className="alert">
                            Das Tragen eines Helmes ist obligatorisch!
                        </div>
                        Für das Schlittenfahren nehmen Sie den Zug bis nach
                        Flums und steigen dort in das Postauto um. Das Postauto
                        bringt Sie nach Tannenheim, von wo aus Sie mit der
                        Gondel auf die Prodalp gelangen, wo sich die
                        Schlittelstrecke befindet.
                        <div>
                            <div className="table-2">
                                <div className="column">
                                    <div className="col-header">
                                        Ohne Helmmiete
                                    </div>
                                    <div>
                                        Wenn Sie sich für das Schlitteln mit
                                        Schlittenmiete angemeldet haben,
                                        erhalten Sie Ihren Schlitten auf der
                                        Prodalp.
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="col-header">
                                        Mit Helmmiete
                                    </div>
                                    <div>
                                        Wenn Sie sich für das Schlitteln mit
                                        Schlitten- und Helmmiete angemeldet
                                        haben, können Sie beides im Intersport
                                        in Tannenheim erhalten.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-hiking.svg" />
                        Wandern
                    </div>
                    <div className="activity-body">
                        Sie finden zahlreiche wunderschöne Wanderungen auf den
                        Flumserbergen, die Sie entweder von Tannenboden oder
                        Tannenheim aus starten können. Überprüfen Sie vorab den
                        Startort, um zu wissen, an welchem Bahnhof Sie
                        aussteigen müssen. Eine Auswahl an Winterwanderungen
                        finden Sie{" "}
                        <a href="https://www.flumserberg.ch/download_4530?locale=de">
                            hier
                        </a>
                        . Alternativ können Sie sich auch einem{" "}
                        <a href="#angebote-vor-ort">geführten Angebot</a>{" "}
                        anschliessen.
                        <div className="spacer"> </div>
                        Beim Wandern sind Sie immer in Gruppen von mindestens 4
                        Personen unterwegs, es sei denn, es handelt sich um ein
                        geführtes Angebot.
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-langlauf.svg" />
                        Langlauf
                    </div>
                    <div className="activity-body">
                        Das Skigebiet Flumserberge ist bekannt für seine
                        atemberaubende Langlaufstrecke, die sowohl Anfängern als
                        auch erfahrenen Läufern ein unvergessliches Erlebnis
                        bietet. Wenn Sie bisher wenig Erfahrung im Langlauf
                        haben oder einfach nur eine Gruppe suchen, mit der Sie
                        gemeinsam laufen können, sollten Sie unbedingt einen
                        Blick auf die{" "}
                        <a href="#angebote-vor-ort">
                            vielfältigen Angebote vor Ort
                        </a>{" "}
                        werfen. Dort finden Sie nicht nur Informationen über die
                        verschiedenen Kurse und Trainingsmöglichkeiten, sondern
                        auch die Möglichkeit, direkt mit den erfahrenen
                        Lehrpersonen in Kontakt zu treten.
                    </div>
                </div>

                <div className="spacer"></div>

                <h2 id="angebote-vor-ort">Angebote vor Ort</h2>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-hiking.svg" />
                        Wandern Flumserberg Tannenboden - Seeben
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Begleiten Sie uns auf einer atemberaubenden
                            Wanderung entlang einer malerischen Strecke von
                            insgesamt 8 Kilometern - hin und zurück. Geniessen
                            Sie die unberührte Natur und erleben Sie die
                            Schönheit der Landschaft hautnah. Doch das ist noch
                            nicht alles! Auf halber Strecke erwartet Sie das
                            Restaurant Seeben Bad, ein wahres Juwel mit einer
                            wunderschönen, ruhigen Sonnenterrasse. Hier können
                            Sie sich entspannen und die Sonne auf Ihrer Haut
                            spüren, während Sie den Blick über den glitzernden
                            See schweifen lassen. Lassen Sie sich von der
                            herzlichen Atmosphäre und dem köstlichen Essen
                            verwöhnen, bevor Sie gestärkt den Rückweg antreten.
                            Diese Wanderung ist ein absolutes Muss für
                            Naturliebhaber und Geniesser gleichermassen. Kommen
                            Sie mit und erleben Sie unvergessliche Momente
                            inmitten der Natur!
                        </div>
                        <div className="activity-teacher">M. Stöcklin</div>
                        <div className="activity-meeting">
                            11:00 Uhr Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-hiking.svg" />
                        Wandern Flumserberg Maschgenkamm - Panüöl - Prodalp
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Erleben Sie eine atemberaubende Bergfahrt mit der
                            Seilbahn und begleiten Sie anschliessend unsere
                            Gruppe auf einer malerischen Panoramawanderung
                            zurück nach Prodalp oder Tannenheim. Tauchen Sie ein
                            in die Schönheit der Natur und geniessen Sie
                            unvergessliche Ausblicke auf die umliegende
                            Berglandschaft. Kommen Sie mit uns auf dieses
                            unvergessliche Abenteuer und lassen Sie sich von der
                            Magie der Berge verzaubern.
                        </div>
                        <div className="activity-teacher">W. Käch</div>
                        <div className="activity-meeting">
                            11:00 Uhr Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-activity.svg" />
                        Snowboard mit fortgeschrittenen Anfänger:innen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Sie stehen bereits sicher auf dem Brett, möchten
                            aber Ihre Technik noch ein wenig verbessern. Oder
                            Sie möchten lernen wie man einfache Carving-Schwünge
                            fahren kann, oder wie man Switch fährt. Ganz egal ob
                            Sie einfache Tricks lernen möchten, oder Ihre
                            Technik ein wenig verfeinern möchten, hier können
                            Sie in individueller Absprache alles lernen.
                        </div>
                        <div className="activity-teacher">
                            J. Gees und Y. Thommen
                        </div>
                        <div className="activity-meeting">
                            11:00 Uhr Tannenboden (im Anschluss an Gondelfahrt)
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-activity.svg" />{" "}
                        Snowboard mit Fortgeschrittenen
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Wer sich beim Snowboardfahren verbessern möchte,
                            einen kurzen Technikcheck haben möchte oder einfach
                            mal sehen möchte, was das Skigebiet Flumserberge zu
                            bieten hat, ist herzlich willkommen! Unser Angebot
                            richtet sich an alle Stufen und wird individuell an
                            die Anwesenden angepasst. Sie können jederzeit
                            teilnehmen und das Angebot nach Belieben verlassen,
                            falls es nicht Ihren Geschmack trifft.
                        </div>
                        <div className="activity-teacher">C. Geissmann</div>
                        <div className="activity-meeting">
                            <div>
                                13:30 Uhr Bergstation Maschgenkamm (vor der
                                grossen Tafel) halten Sie Ausschau nach einer
                                grünen Jacke.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-ski.svg" />
                        Blau fahren mit Yoda
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Sie möchten nur blaue Pisten fahren? Dann sind Sie
                            hier genau richtig. Hier werden Sie alle blauen
                            Pisten im Skigebiet abfahren und dabei die eine
                            Sicherheit auf den Ski entwickeln, dass Sie am am
                            Nachmittag auch schon auf roten Pisten unterwegs
                            sein können.
                        </div>
                        <div className="activity-teacher">T. Gyalog</div>
                        <div className="activity-meeting">
                            11:00 Uhr Tannenboden (im Anschluss an Gondelfahrt)
                            halten Sie Ausschau nach dem Yoda-Rucksack.
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-ski.svg" /> /
                        <Icon url="/wintersporttag/logo-activity.svg" /> Das
                        Skigebiet Flumser-Berge entdecken
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Gerne möchten wir ihnen das Skigebiet Flumserberg
                            zeigen, egal, ob Sie mit den Skiern oder dem
                            Snowboard unterwegs sind. Das Angebot richtet sich
                            an fortgeschrittene Fahrer:innen.
                        </div>
                        <div className="activity-teacher">
                            J. Freiermuth und B. Grossmann
                        </div>
                        <div className="activity-meeting">
                            12.00 Uhr Bergstation Maschgenkamm (vor der grossen
                            Tafel)
                        </div>
                    </div>
                </div>

                <div className="activity">
                    <div className="activity-header">
                        <Icon url="/wintersporttag/logo-ski.svg" />
                        Skifahren Mittelstufe
                    </div>
                    <div className="activity-body">
                        <div className="activity-description">
                            Sie können schon Skifahren, möchten aber noch an
                            Ihrer Technik arbeiten, oder einfach nur sicherer
                            und schneller werden auf den Skiern, dann sind Sie
                            hier genau richtig. Hier lernen Sie wie man rote und
                            auch schwarze Pisten sicher und elegant hinunter
                            fährt.
                        </div>
                        <div className="activity-teacher">R. Morf</div>
                        <div className="activity-meeting">
                            11:00 Uhr Tannenboden (Talstation Sessellift)
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
