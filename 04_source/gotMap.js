// create svg canvas
const canvHeight = 600, canvWidth = 1245;
const svg = d3.select("body").append("svg")
.attr("width", canvWidth)
.attr("height", canvHeight)
.style("border", "1px solid")
.style('background-color','aliceblue');

// calc the width and height depending on margins.
const margin = {top: 50, right: 20, bottom: 30, left: 60};
height = canvHeight - margin.top - margin.bottom;
width = canvWidth - margin.left - margin.right;



d3.json("data.json", function(data) {
    //Constants for unified drawing and calculation
    const circleRad = 10;
    const textPadding = 25;
    const strokeWidth=3;


    //DRAWING House Stark Area
    const starkArea = svg.append('g');
    const starkAreaPadding = 50;
    var starkCellCounter=0;
    var starkRowCounter =0;
    const saWidth= 350;
    const saHeight= 150;
    const saXPos = canvWidth/2-(saWidth/2);
    const saYPos = canvHeight/2-(saHeight/2);
    const starkColor='blue';
    drawStarkArea();



    //DRAWING The Nights Watch Area
    const nwArea = svg.append('g');
    const nwAreaPadding = 50;
    var nwCellCounter=0;
    var nwRowCounter=0;
    const nwWidth=150;
    const nwHeight=200;
    const nwXPos = 0;
    const nwYPos = canvHeight/2-(nwHeight/2);
    const nwColor='black';
    drawNightsWatchArea();


    //DRAWING House Targaryen Area
    const targArea= svg.append('g');
    const targAreaPadding = 50;
    var targCellCounter=0;
    var targRowCounter=0;
    const targWidth=200;
    const targHeight=150;
    const targXPos=0;
    const targYPos=0;
    const targColor='red';
    drawTargaryenArea();


    //DRAWING Free Folk Area
    const ffArea=svg.append('g');
    const ffAreaPadding=50;
    var ffCellCounter=0;
    var ffRowCounter=0;
    const ffWidth=150;
    const ffHeight=125;
    const ffXPos=0;
    const ffYPos=canvHeight-ffHeight;
    const ffColor='navajowhite';
    drawFreeFolkArea();


    //DRAWING House Greyjoy Area
    const gjArea=svg.append('g');
    const gjAreaPadding=50;
    var gjCellCounter=0;
    var gjRowCounter=0;
    const gjWidth=150;
    const gjHeight=75;
    const gjXPos=300;
    const gjYPos=canvHeight-gjHeight;
    const gjColor='darkolivegreen';
    drawGreyjoyArea();


    //DRAWING House Baratheon Area
    const baraArea=svg.append('g');
    const baraAreaPadding=50;
    var baraCellCounter=0;
    var baraRowCounter=0;
    const baraWidth=200;
    const baraHeight=125;
    const baraXPos=300;
    const baraYPos=0;
    const baraColor='gold';
    drawBaratheonArea();




    //Loop through hole dataset and draw accordingly
    var i;
    for(i =0; i<data.characters.length;i++){
      var person = data.characters[i];
      processStark(person);
      processNightsWatch(person);
      processTargaryen(person);
      processFreeFolk(person);
      processGreyjoy(person);
      processBaratheon(person);
    }
    console.log(data);




    //FUNCTIONS
    //Following functions are declared in d3.json scope

    //DRAWING Area functions
    function drawStarkArea(){

          starkArea.append('rect').attr('width',saWidth).attr('height',saHeight).attr('x',saXPos).attr('y',saYPos).
          style('fill','none').style('stroke',starkColor).style('stroke-width',strokeWidth);

          starkArea.append('text').text('House Stark').attr('x',saXPos+saWidth/2)
          .attr('y',saYPos+saHeight+textPadding).attr("font-family", "sans-serif")
          .attr("font-size", "24px")
          .style("text-anchor", "middle");
    }

    function drawNightsWatchArea(){

          nwArea.append('rect').attr('width', nwWidth).attr('height',nwHeight).attr('x',nwXPos).attr('y',nwYPos).
          style('fill','none').style('stroke',nwColor).style('stroke-width',strokeWidth);

          nwArea.append('text').text('The Nights Watch').attr('x',nwXPos+nwWidth+textPadding).
          attr('y',nwYPos+nwHeight/2).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle")
          .attr('transform','rotate(270,'+(nwXPos+nwWidth+textPadding)+','+(nwYPos+nwHeight/2)+')');
    }
    function drawTargaryenArea(){

          targArea.append('rect').attr('width',targWidth).attr('height',targHeight)
          .attr('x',targXPos).attr('y',targYPos).style('fill','none').style('stroke',targColor)
          .style('stroke-width',strokeWidth);

          targArea.append('text').text('House Targaryen').attr('x',targXPos + targWidth/2)
          .attr('y',targYPos + targHeight+textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle");
    }
    function drawFreeFolkArea(){

          ffArea.append('rect').attr('width',ffWidth).attr('height',ffHeight)
          .attr('x',ffXPos).attr('y',ffYPos).style('fill','none').style('stroke',ffColor)
          .style('stroke-width',strokeWidth);

          ffArea.append('text').text('Free Folk').attr('x',ffXPos+ffWidth/2)
          .attr('y',ffYPos-textPadding/2).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle");
    }
    function drawGreyjoyArea(){

          gjArea.append('rect').attr('width',gjWidth).attr('height',gjHeight)
          .attr('x',gjXPos).attr('y',gjYPos).style('fill','none').style('stroke',gjColor)
          .style('stroke-width',strokeWidth);

          gjArea.append('text').text('House Greyjoy').attr('x',gjXPos+gjWidth/2)
          .attr('y',gjYPos-textPadding/2).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle");
    }
    function drawBaratheonArea(){
      baraArea.append('rect').attr('width',baraWidth).attr('height',baraHeight)
      .attr('x',baraXPos).attr('y',baraYPos).style('fill','none').style('stroke',baraColor)
      .style('stroke-width',strokeWidth);

      baraArea.append('text').text('House Baratheon').attr('x',baraXPos + baraWidth/2)
      .attr('y',baraYPos + baraHeight+textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
    }




    //Processing different Houses
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

    function processTargaryen(person){
      var isTarg = person.faction==='House Targaryen';
      if(isTarg){
        targCellCounter++;
        var persX = getTargX();
        var persY = getTargY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(targArea,persX,persY,targColor,person.name);

        if(targCellCounter==4){
          targCellCounter=0;
          targRowCounter++;
        }
      }
    }

    function processFreeFolk(person){
      var isFF = person.faction==='Free Folk';
      if(isFF){
        ffCellCounter++;
        var persX=getFFX();
        var persY=getFFY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(ffArea,persX,persY,ffColor,person.name);

        if(ffCellCounter==3){
          ffCellCounter=0;
          ffRowCounter++;
        }
      }
    }

    function processGreyjoy(person){
      var isGJ = person.faction==='House Greyjoy';
      if(isGJ){
        gjCellCounter++;
        var persX=getGJX();
        var persY=getGJY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(gjArea,persX,persY,gjColor,person.name);

        if(gjCellCounter==3){
          gjCellCounter=0;
          gjRowCounter++;
        }
      }
    }

    function processBaratheon(person){
      var isBara = person.faction==='House Baratheon';
      if(isBara){
        baraCellCounter++;
        var persX=getBaraX();
        var persY=getBaraY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(baraArea,persX,persY,baraColor,person.name);

        if(baraCellCounter==4){
          baraCellCounter=0;
          baraRowCounter++;
        }
      }
    }

    //DRAWING a circle for a person/Character
    function drawPersonCircle(area,x,y,color,name){
      area.append('circle').attr('r',circleRad).attr('cx',x).attr('cy',y)
      .attr('fill',color).attr('id',name+'_'+i);
    }

    //Generating koordinates for next person from according houses
    function getStarkX(){

      return saXPos + starkCellCounter*starkAreaPadding;
    }

    function getStarkY(){

        return saYPos+starkAreaPadding/2+starkRowCounter*starkAreaPadding;
    }

    function getNWX(){
      if(nwCellCounter==1)return 28;
      else return nwXPos + nwCellCounter*nwAreaPadding-22;
    }
    function getNWY(){
      return nwYPos+nwAreaPadding/2+nwRowCounter*nwAreaPadding;
    }

    function getTargX(){
      if(targCellCounter==1)return 28;
      else return targXPos + targCellCounter*targAreaPadding-22;
    }
    function getTargY(){
      return targYPos+targAreaPadding/2+targRowCounter*targAreaPadding;
    }

    function getFFX(){
      if(ffCellCounter==1)return 28;
      else return ffXPos + ffCellCounter*ffAreaPadding-22;
    }
    function getFFY(){
      return 8+(ffYPos+ffAreaPadding/2+ffRowCounter*ffAreaPadding);
    }
    function getGJX(){
      if(gjCellCounter==1)return gjXPos+28;
      else return gjXPos + gjCellCounter*gjAreaPadding-22;
    }
    function getGJY(){
      return 8+(gjYPos+gjAreaPadding/2+gjRowCounter*gjAreaPadding);
    }
    function getBaraX(){
      if(baraCellCounter==1)return baraXPos+28;
      else return baraXPos + baraCellCounter*baraAreaPadding-22;
    }
    function getBaraY(){
      return 8+(baraYPos+baraAreaPadding/2+baraRowCounter*baraAreaPadding);
    }

});
