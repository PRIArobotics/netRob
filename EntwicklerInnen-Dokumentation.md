# EntwicklerInnen-Dokumentation 

Im Projekt netRob wurde ein webbasiertes Framework entwickelt, mit dem man Industrieroboter einfach grafisch programmieren und in 3D simulieren kann. Ziel war, dass Programme einerseits auf echten Industrierobotern ausführbar sein sollten und andererseits auch in der dazugehörigen Web-App einen virtuellen Roboter steuern und dessen virtuelles Umfeld, beispielsweise greifbare Objekte, beeinflussen könnten. Da Industrieroboter sehr kostspielig in der Anschaffung sind, als auch proprietäre Simulationssoftware für Industrieroboter, soll netrob SchülerInnen, die durch den Einsatz grafischer Programmiersprachen einen anfängerfreundlichen Zugang zur Programmierung und Industrierobotik ermöglichen. Das Framework kann aber auch von universitären Einrichtungen und privaten Personen für die Einführung im Robotik benutzt werden. Da die  Programmierumgebung auf  der HedgehogIDE aufbaut ist die AnwenderInnen-Dokumentation der HedgehogIDE relevant.

Die Entwicklerdokumentation der HedgehogIDE ist unter https://github.com/PRIArobotics/HedgehogIDE/tree/develop/docs zu finden.

Die Simulation der der Roboter wurde in Babylon js programmiert. Diese ist in dem Unterordner webRob zu finden. 

## Erstellen eines neuen Blocky  Blockes mittels Code generation

Definieren des Blockes im File  `gsl_blockly/blockly.yaml`. (Hierbei hilft auch die offizelle Blocky Dokumentation etwas weiter)

Um den Code zu generieren:

`yarn codegen:gsl-blockly   `



## Code inhalt des Blockes

Also im Falle vom CRCLSetTCP Blockes würde man im File `src/components/ide/VisualEditor/blocks/misc.js` ) den eigentlichen Code implementiern, der den TCP setzt.   Dafür sollte der Code der ausgeführt werden soll in die variable `code` der gewünschten Sprache gespeichert werden.

```javascript
export const CRCL_SET_TCP: Block = {
  .......
  generators: {
    JavaScript: block => {
      .....
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tcp-body-JavaScript>
    },
    Python: block => {
      .......
      // TODO generate code
      const code = '';
      return code;
      // </GSL customizable: crcl_set_tcp-body-Python>
    },
  },
```



## Text der Blöcke 

Hier gibt es für jede Sprache  ein eigenes File. Das deutsche File wäre `src/components/ide/VisualEditor/blocks/misc_msg_de.js` 

Hier sind `%1` für den ersten Parameter und `%2` für den zweiten Parameter. 

```javascript
Msg['CRCL_SET_TCP'] = 'Set Tool Center Point to %1 %2';
```


## Block zur Ansicht hinzufügen

Die Blöck werden im `src/components/ide/VisualEditor/VisualEditor.js` hinzugefügt.  (Hier werden auch die verschiedenen Kategorien  erstellt)



## Neuen Lehrer Account erstellen 

Einen neuen Lehrer Account zu erstellen ist entweder über die GUI oder über ein Script möglich. Dieses kann man über `yarn create-user` ausführen. 

## Simulation 

Wie erwähnt, wurde die Simulation in BabylonJs geschrieben.  Es wird sowohl bei den Robotern als auch bei der Simulation mit CRCL Befehlen (Welche mit dem Blockly Code generiert werden) gearbeitet. Die CRCL Befehle mit denen die Simulation arbeitet, entsprechen also denen in der Realität. Definition der CRCL Befehle 
