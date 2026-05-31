# Nevermore Academy — AR-website (DP12)

Een fictieve schoolwebsite voor Nevermore Academy (Wednesday-thema) met een verborgen
"outcast"-laag die je ontdekt via AR. Studentenproject voor User Interaction (DP12).

## Structuur
```
index.html            Homepage (voordeur van de site — hier starten)
opleidingen.html      Opleidingenoverzicht met werkende categoriefilter
vak-detail.html       Detailpagina (Botanische Alchemie) + aanmeldflow
geschiedenis.html     Tijdlijn + verborgen "Geheimen uit het Archief"-laag
nieuws.html           Nieuwsoverzicht
contact.html          Contactformulier met validatie
ar.html               AR-ervaring: scan het wapen -> zwevend dagboek + geheime boodschap
style.css         Huisstijl (zwart/gripaars, Cinzel/Inter/UnifrakturMaguntia)
main.js            Menu, scroll-reveal, filter, formuliervalidatie

  nevermore-marker.png  De scan-marker (tonen/printen om te scannen)
  nevermore.patt        Het trackingbestand voor AR.js (al klaargezet)
```

## Lokaal draaien
Open `index.html` met de Live Server-extensie in VS Code (rechtermuisknop -> Open with Live Server).

## De AR-ervaring (ar.html)
Techniek: **A-Frame + AR.js** (pattern/image-tracking). Je scant het Nevermore-wapen
(`nevermore-marker.png`); daarboven verschijnt een zwevend 3D-dagboek dat rustig
ronddraait en licht op-en-neer beweegt, met een geheime boodschap uit het archief ernaast —
precies het concept uit DP11. Het trackingbestand (`nevermore.patt`) staat al klaar, dus er
hoeft niets gecompileerd te worden.

**Op de telefoon (echte camera-AR):** de site moet via https draaien. Zet hem online via
GitHub Pages, open de link op je telefoon, ga naar "Betreed het archief", geef camera-toegang
en richt op de marker (op een tweede scherm of geprint).

**Op de laptop:** werkt ook via de webcam — houd de marker (op je telefoon of geprint) voor de camera.

## Huisstijl
Diep zwart #0A0A0A · donkergrijs #2B2B2B · Nevermore-paars #6B2FA5 · mistgrijs #B5B8BE.
Koppen Cinzel, bodytekst Inter, accent UnifrakturMaguntia.
