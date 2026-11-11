# Tavola viva — promemoria per Claude

Tavola da disegno tecnico per la LIM, fatta da Giulia, insegnante di tecnologia alla scuola media (prima, seconda e terza).
Sito: https://giulitecnologia.github.io/tavola-viva/ (GitHub Pages dal ramo `main`).

## Come lavorare con Giulia
- Rispondere sempre **in italiano**, in modo semplice e concreto: non è una programmatrice.
- **Prima di aggiungere una funzione nuova, proporre come funzionerebbe e aspettare il suo sì.** Quando chiede "è possibile?", rispondere e attendere. Se una richiesta è ambigua, chiedere (anche con domande a scelta).
- Correggere subito i problemi che segnala, spiegando la causa in parole semplici.
- Se dice "fermo", "aspetta", "lascia perdere": fermarsi e annullare le modifiche non volute.
- Non appesantire l'app: le parti grandi stanno in pagine a parte.
- Non creare pull request. Nei messaggi di commit niente nome del modello.

## Come pubblicare una modifica
1. Modificare i file e **provarla** con Playwright (Chromium già installato). Per i test: `localStorage['tavolaviva.benvenuto']='1'`; le pagine espongono `window.TV` (Tavola viva) e `window.PR` (Proiezioni).
2. Aumentare il numero di versione in `sw.js` (`const CACHE = 'tavolaviva-vNN'`) a ogni modifica di `index.html`, `proiezioni.html` o delle altre pagine.
3. Commit e `git push origin main`: GitHub Pages si aggiorna in un paio di minuti. Le immagini dei test vanno nella cartella temporanea, non nel progetto (`.gitignore` esclude `/*.png`).
4. Dire a Giulia di ricaricare la pagina (Ctrl+F5, su Mac Cmd+Maiusc+R).

## File
- `index.html` — Tavola viva: squadre (con «⇄ Gira» per capovolgerle), riga, righello, compasso guidato, segmento (libero/preciso, angoli guidati), quota, punto (anche in fila ogni N cm), matita, colore (secchiello/pastello), gomma, lettere; passaggi; guida con il riquadro delle segnalazioni (mail della scuola di Giulia); salvataggio nel browser (IndexedDB), come file PDF e su Google Drive.
- `proiezioni.html` — Proiezioni ortogonali nel triedro di Monge: solidi e gruppi, sezioni, apertura dei piani, trascinamento dei solidi, legenda Misure, esercizi salvati, Drive (cartella Tavola viva → Proiezioni), PDF consegna/soluzione, Porta in Tavola viva con passaggi automatici.
- `assonometrie.html` — Assonometrie **in prova** (scritta «In prova», pulsante con «prova» in Tavola viva): un solido alla volta, isometrica (x e y a 30°), cavaliera (y a 45° verso destra in alto, profondità dimezzata), monometrica (pianta vera, x a 30° e y a 60°, altezze vere); solido 3D da girare, passaggi sul foglio 33 × 24 (linee nuove in arancione), PDF consegna/soluzione/passaggi, Porta in Tavola viva (in monometrica i cerchi diventano archi). Niente Drive né elenco esercizi per ora. Test: `window.AS`.
- `ripara.html` — riparazione se l'app si blocca (aggiorna la copia offline, esercizio nuovo, svuota elenco). La barra rossa d'errore nelle pagine porta qui.
- `privacy.html` — norme sulla privacy (richieste da Google per Drive).
- `sw.js` — copia offline (network-first). `manifest.webmanifest` — app installabile.

## Scelte già fatte (non cambiarle senza chiedere)
- Foglio predefinito: 33 × 24 orizzontale, bianco, squadratura a 1 cm, cartigli (nome, classe, data, tavola n.). Quadretti da 0,5 cm solo se scelti.
- Proiezioni: i piani hanno **sempre** la misura del foglio vero (quadranti 15,5 × 11 cm, mai ingranditi); se un solido sporge, bordi rossi e avviso. Nessun quadretto sui piani. Metodo europeo, archi di richiamo da PO a PL. Distanze misurate dal punto del solido più vicino al piano. Numeri fino ai centesimi.
- Legenda Misure: solo lati/base, altezza e posizione (niente apotema né spigolo laterale).
- Tutti i PDF sono **A4** (disegno rimpicciolito per starci), con dentro i dati per riaprirli e il pulsante verde "Apri in…" che non si stampa. Passaggi in PDF: 1, 4 o 6 per pagina, numerati.
- Quote: misura in cm, solo il numero, trattini obliqui, linee 2H; un solo gesto, la quota va dalla parte libera e si sposta trascinandone la linea.
- Google Drive: progetto Google Cloud registrato con una Gmail apposta per Tavola viva (non quella della scuola), permesso `drive.file`, app pubblicata "In produzione".
- Il tema predefinito è Verde bosco (anche Petrolio e Lavanda).

## Idee in attesa (solo se Giulia le chiede)
- Assonometrie: Giulia le fa su **foglio bianco**. Possibili aggiunte se le chiede: gruppi di solidi, Drive ed elenco esercizi, ovale a 4 centri al posto dell'ellisse.
- Campo "Consegna" con le misure da far uscire nel PDF delle tavole (Giulia non è sicura che serva: aspettare).
- Compasso: ogni tanto ancora scomodo sulla LIM; chiedere in quale passaggio.
- Quote di cerchi e archi (Ø e R).
