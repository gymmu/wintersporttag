import "./jura.css";

export default function Jura() {
  return (
    <>
      <div className="container jura-container">
        <h2>Jurawanderung</h2>
        <div className="jura-entry">
          Als Alternative zum Skifahren bieten wir eine wunderschöne Wanderung
          im Jura an. Die Anreise erfolgt individuell mit dem öffentlichen
          Verkehr bis nach Aesch. Die Ankunftszeiten für beide Gruppen finden
          Sie im Infobrief.
        </div>

        <div className="jura-entry">
          <h3>Sportlicher Teil</h3>
          Diese Wanderung wird als geführte Tour durchgeführt und findet
          ausschliesslich in geschlossener Gruppe statt. Es ist strengstens
          untersagt, sich von der Gruppe zu entfernen.
        </div>

        <div className="jura-entry">
          <h3>Route</h3>
          Die Wanderroute führt von Aesch nach Grellingen.
          <div className="center">
            <a href="https://map.schweizmobil.ch/?lang=de&photos=yes&logo=yes&detours=yes&season=summer&resolution=2.79&E=2612756&N=1255885&bgLayer=pk&trackId=371438475">
              <img src="route.png" />
            </a>
          </div>
        </div>

        <div className="jura-entry">
          <h3>Kosten</h3>
          Die Reiseroute befindet sich im Gebiet des Tarifverbundes
          Nordwestschweiz. Die GA, Halbtax und U-Abos sind gültig. Die
          Fahrkarten für die Hinfahrt nach Aesch und für die Rückfahrt ab
          Grellingen sind Sache der Teilnehmenden.
        </div>

        <div className="jura-entry">
          <h3>Ausrüstung</h3>
          Warme Kleider, Wanderschuhe oder gute Winterschuhe (keine
          Turnschuhe!). Die Wanderung führt je nach Witterung durch Schnee und
          Eis.
        </div>

        <div className="jura-entry">
          <h3>Verplegung</h3>
          Verpflegung erfolgt aus dem eigenen Rucksack. Es hat einen Teeposten
          auf der Wanderung, dort wird jedoch kein Essen bereitgestellt.
        </div>

        <div className="jura-entry">
          <h3>Rauchen, Kiffen Alkohol</h3>
          Kiffen und der Konsum von Alkohol sind während des ganzen
          Wintersporttags (Reise inbegriffen) verboten.
        </div>

        <div className="jura-entry">
          <h3>Begleitung Lehrpersonen</h3>
          Die begleitenden Lehrpersonen sind zuständig für die Information der
          TeilnehmerInnen vor Ort. Die Präsenzkontrollen erfolgen auf der Hin-
          und der Rückfahrt: in Aesch vor Beginn der Wanderung und in Grellingen
          am Ende der Wanderung.
        </div>

        <div className="jura-entry">
          <h3>Schulbeginn</h3>
          Der Unterricht am Tag nach dem Wintersporttag beginnt in der 2.
          Lektion.
        </div>
      </div>
    </>
  );
}
