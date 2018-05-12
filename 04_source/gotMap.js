// create svg canvas
const canvHeight = 600, canvWidth = 1245;
const svg = d3.select("body").append("svg")
.attr("width", canvWidth)
.attr("height", canvHeight)
.style("border", "1px solid");

// calc the width and height depending on margins.
const margin = {top: 50, right: 20, bottom: 30, left: 60};
height = canvHeight - margin.top - margin.bottom;
width = canvWidth - margin.left - margin.right;



d3.json("data.json", function(data) {
    //Constants for unified drawing and calculation
    const circleRad = 10;
    const textPadding = 25;

    //DRAWING HOUSE STARK AREA
    var starkArea = svg.append('g');
    var starkAreaPadding = 50;
    var starkCellCounter=0;
    var starkRowCounter =0;
    var saWidth= 350;
    var saHeight= 150;
    var saXPos = canvWidth/2-(saWidth/2);
    var saYPos = canvHeight/2-(saHeight/2);
    var starkColor='blue';

    starkArea.append('rect').attr('width',saWidth).attr('height',saHeight).attr('x',saXPos).attr('y',saYPos).
    style('fill','none').style('stroke',starkColor).style('stroke-width',3);

    starkArea.append('text').text('House Stark').attr('x',saXPos+saWidth/2)
    .attr('y',saYPos+saHeight+textPadding).attr("font-family", "sans-serif")
    .attr("font-size", "24px")
    .style("text-anchor", "middle");

    //DRAWING The Nights Watch AREA
    var nwArea = svg.append('g');
    var nwAreaPadding = 50;
    var nwCellCounter=0;
    var nwRowCounter=0;
    var nwWidth=150;
    var nwHeight=350;
    var nwXPos = 0;
    var nwYPos = canvHeight/2-(nwHeight/2);
    var nwColor='black';

    nwArea.append('rect').attr('width', nwWidth).attr('height',nwHeight).attr('x',nwXPos).attr('y',nwYPos).
    style('fill','none').style('stroke',nwColor).style('stroke-width',3);

    nwArea.append('text').text('The Nights Watch').attr('x',nwXPos+nwWidth+textPadding).
    attr('y',nwYPos+nwHeight/2).attr("font-family", "sans-serif").attr("font-size", "24px")
    .style("text-anchor", "middle")
    .attr('transform','rotate(270,'+(nwXPos+nwWidth+textPadding)+','+(nwYPos+nwHeight/2)+')');



    //Loop through hole dataset and draw accordingly
    var i;
    for(i =0; i<data.characters.length;i++){
      var person = data.characters[i];
      processStark(person);
      processNightsWatch(person);
    }
    console.log(data);




    //FUNCTIONS
    //Following functions are declared in d3.json scope

    function processStark(person){
      var isStark = person.faction==='House Stark';
    if(isStark){
      starkCellCounter++;
      var persX = getStarkX();
      var persY = getStarkY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(starkArea,persX,persY,starkColor,person.name);

      if(starkCellCounter==6){
        starkCellCounter=0;
        starkRowCounter++;
      }
    }
    }

    function processNightsWatch(person){
      var isNW = person.faction === "Night's Watch"
      if(isNW){
        nwCellCounter++;
        var persX = getNWX();
        var persY = getNWY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(nwArea,persX,persY,nwColor,person.name);

        if(nwCellCounter==3){
          nwCellCounter=0;
          nwRowCounter++;
        }
      }
    }


    function drawPersonCircle(area,x,y,color,name){
      area.append('circle').attr('r',circleRad).attr('cx',x).attr('cy',y)
      .attr('fill',color).attr('id',name+'_'+i);
    }

    function getStarkX(){

      return saXPos + starkCellCounter*starkAreaPadding;
    }

    function getStarkY(){

        return saYPos+starkAreaPadding/2+starkRowCounter*starkAreaPadding;
    }

    function getNWX(){
      return nwXPos + nwCellCounter*nwAreaPadding;
    }
    function getNWY(){
      return nwYPos+nwAreaPadding/2+nwRowCounter*nwAreaPadding;
    }

});
