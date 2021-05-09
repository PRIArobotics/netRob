Jede Zeile entspricht einem grafischen Funktionsblock mit eventuellem Rückgabewert. Grau markierte `Felder` entsprechen Inputs für andere Funktionsblöcke um Blöcke zur schachteln.

# Bewegungen

Führe zusammenhängend auf `Robot1` aus *// Ummantelneder Block um Roboter zu spezifizieren bzw. mehrere Roboter parallel zu programmieren*

Bewege nach `Vector` `Rotation` *// absolut*

Bewege um `Vector` `Rotation` *// relativ*

Bewege linear nach `Vector` `Rotation` *// absolut*

Bewege linear um `Vector` `Rotation` *// relativ*

Bewege `vorwärts/rückwärs/links/rechts/oben/unten` für `1` `mm` *// relativ*

Drehe `im/gegen den Uhrzeigersinn` um `180`° *// Z-Achse*

Drehe um Achse `Vector` um `90`°

# Tooling

Setze Geschwindigkeit auf `1` `mm/s`

Setze Beschleunigung auf `1` `mm/s^2`

Schalte Werkzeug `ein/aus`

Schalte Werkzeug auf Wert `0.5`

Wechsle auf Werkzeug `1`

Warte für `1`ms

# Vector Datentyp

X:`1`, Y:`2`, Z:`3` *// Konstruktor für Vector Datentyp*

Position von `Objekt1/Roboter1/TCP1` *// Liefert Position von anderem 3D-Objekt in 3D-Simulation*

Entfernung zwischen `Vector` und `Vector`

Addiere `Vector` und `Vector`

Subtrahiere `Vector` und `Vector`

Multipliziere `Vector` und `Vector`

Multipliziere elementweise `Vector` und `Vector`

Multipliziere `Vector` und `4`

Normalisiere `Vector`

`x/y/z` von `Vector` *// Liefere Koordinate (Getter)*

# Rotation Datentyp

A:`4`°, B:`5`°, C:`6`° *// Konstruktor Rotation Datentyp in Euler Winel. Euler Winkel Definition: Fixe Winkel Rotation um X-Y-Z (= Z-Y'-X'' Euler Winkel; =Yaw Pitch Roll)*

Rotation von Achse `Vector` um `90`° *// Konstruktor von Ritation Datentyp*

Rotation von `Objekt1/Roboter1` *// Liefert Rotation von anderem 3D-Objekt in 3D-Simulation*

Rotiere `Rotation` um `Rotation`

Invertiere `Rotation`

`A/B/C` von `Rotation` *// Liefere Komponente (Getter)*

# Pose Operationen

Rotiere `Vector` um `Rotation`

Kombiniere `Vector` `Rotation` und `Vector` `Rotation` *// Interne 4x4 Matrix Multiplication*

# Zukünftige Funktionen für Version 2

Sensorwert für IO `1`

Warte auf IO `1`

Setze TCP auf `Vector` `Rotation`

set base

# Änderungen in Zukunft

Speed in Prozent überall

Klammer für Überschleifen (neben der Klammer für Roboter)
