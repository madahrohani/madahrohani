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