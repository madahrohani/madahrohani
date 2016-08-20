<center>     
   <table width="170" border="0" align="left" cellpadding="0" cellspacing="0" class="style1">
		<script language="JavaScript">
        function ShowGuitarChord(GuitarChordImage)
		{
    var root = document.guitarchords.root.options[document.guitarchords.root.selectedIndex].value; 
    var chordtype = document.guitarchords.chordtype.options[document.guitarchords.chordtype.selectedIndex].value; 
    var voicing = document.guitarchords.voicing.options[document.guitarchords.voicing.selectedIndex].value;   
    var GuitarChordImage = "http://www.theguitarlesson.com/showguitarchords.php?r=" + root + "&t=" + chordtype +"&v=" +voicing;
    document.GuitarChord.src = GuitarChordImage;
    var x = document.guitarchords.root.selectedIndex;
    var y = document.guitarchords.chordtype.selectedIndex;
    var roottext = document.guitarchords.root.options[x].text;
    var chordtext = document.guitarchords.chordtype.options[y].text;
    document.getElementById("guitarchordname").firstChild.nodeValue=roottext + " " + chordtext;
}

</script>
<div class="style1">
<span id="guitarchordname" style="font-size:1.2em;font-weight:bold;">C major</span><br />
<img src="http://www.theguitarlesson.com/showguitarchords.php?r=c&t=maj&v=chord1" name="GuitarChord" style="border:1px solid #abadb3;" alt="guitar chord madah rohani" title="Guitar Chord Madah Rohani"/>
<form name="guitarchords">
  <select name="root"  onchange="ShowGuitarChord()">
    <option value="a" />A
    <option value="b" />B
    <option value="c" selected="selected" />C
    <option value="d" />D
    <option value="e" />E
    <option value="f" />F
    <option value="g" />G
  </select><select name="chordtype" onchange="ShowGuitarChord()">
        <option value="-add9" />add9
        <option value="-aug" />aug
        <option value="-b5" />b5
        <option value="-dim" />dim
        <option value="-sus4" />sus4
        <option value="11" />11
        <option value="13" />13
        <option value="5" />5
        <option value="6-9" />6/9
        <option value="6" />6
        <option value="7-aug-b9" />7 augb9
        <option value="7-aug" />7 aug
        <option value="7" />7
        <option value="7-sharp-9" />7#9
        <option value="7-sus4" />7 sus4
        <option value="7b5" />7b5
        <option value="7b9" />7b9
        <option value="9-aug" />9 aug
        <option value="9" />9
        <option value="9-sharp-11" />9#11
        <option value="9b5" />9b5
        <option value="m" />m
        <option value="m-maj7" />m(maj7)
        <option value="m11" />m11
        <option value="m6-9" />m6/9
        <option value="m6" />m6
        <option value="m7" />m7
        <option value="m7b5" />m7b5
        <option value="m9" />m9
        <option value="m9-maj7" />m9(maj7)
        <option value="maj" selected="selected" />major
        <option value="maj7" />maj7
        <option value="maj7b5" />maj7b5
        <option value="maj9" />maj9
    </select><br />

    <select name="voicing" onchange="ShowGuitarChord()">
        <option value="chord1" selected="selected" />Style 1
        <option value="chord2" />Style 2
        <option value="chord3" />Style 3
        <option value="chord4" />Style 4
        <option value="chord5" />Style 5
        <option value="chord6" />Style 6
    </select>

</form></div>
    </table>
</center>
