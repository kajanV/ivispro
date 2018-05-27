// create svg canvas
const canvHeight = 600, canvWidth = 1245;
const svg = d3.select("body").append("svg")
  .attr("width", canvWidth)
  .attr("height", canvHeight)
  .style("border", "1px solid")
  .style('background-color', 'aliceblue');


// calc the width and height depending on margins.
const margin = { top: 50, right: 20, bottom: 30, left: 60 };
height = canvHeight - margin.top - margin.bottom;
width = canvWidth - margin.left - margin.right;

//Draw sub-Map Areas (slider and infobox)
const area1 = d3.select('body').append('div').attr('id', 'area1').attr('class', 'area');


const area2 = d3.select('body').append('div').attr('id', 'area2').attr('class', 'area');

var slider = area2.append('input')
  .attr('type', 'range')
  .attr('min', '1')
  .attr('max', '50')
  .attr('class', 'slider')
  .attr('id', 'myRange')
  .attr('step', '1.0')
  .attr('value', '1');



const area2Height = 200, area2Width = 200;
const area3 = d3.select('body').append('div').attr('id', 'area3').attr('class', 'area');
const svg2 = area3
  .append("svg")
  .attr("width", area2Width)
  .attr("height", area2Height)
  .style("border", "1px solid black")
  .style('background-color', 'aliceblue');

var epLabel = svg2.append('text').text('s01e01').attr("font-family", "sans-serif")
  .attr("font-size", "24px").style('fill', 'black').style("text-anchor", "start")
  .attr('x', '20').attr('y', '30%');



var toolTip = d3.select('body').append('div').attr('id', 'tooltip').style('left', 100 + 'px').style('top', 100 + 'px');
var toolTipText = toolTip.append('p').text('NA');
toolTip.classed('hidden', true);





var currentEP = 's01e01';





d3.json("data.json", function (data) {



  //Constants for unified drawing and calculation
  const circleRad = 10;
  const textPadding = 25;
  const strokeWidth = 3;


  //DRAWING House Stark Area
  const starkArea = svg.append('g');
  const starkAreaPadding = 50;
  var starkCellCounter = 0;
  var starkRowCounter = 0;
  const saWidth = 350;
  const saHeight = 150;
  const saXPos = canvWidth / 2 - (saWidth / 2);
  const saYPos = canvHeight / 2 - (saHeight / 2);
  const starkColor = 'blue';
  drawStarkArea();



  //DRAWING The Nights Watch Area
  const nwArea = svg.append('g');
  const nwAreaPadding = 50;
  var nwCellCounter = 0;
  var nwRowCounter = 0;
  const nwWidth = 150;
  const nwHeight = 200;
  const nwXPos = 0;
  const nwYPos = canvHeight / 2 - (nwHeight / 2);
  const nwColor = 'black';
  drawNightsWatchArea();


  //DRAWING House Targaryen Area
  const targArea = svg.append('g');
  const targAreaPadding = 50;
  var targCellCounter = 0;
  var targRowCounter = 0;
  const targWidth = 200;
  const targHeight = 150;
  const targXPos = 0;
  const targYPos = 0;
  const targColor = 'red';
  drawTargaryenArea();


  //DRAWING Free Folk Area
  const ffArea = svg.append('g');
  const ffAreaPadding = 50;
  var ffCellCounter = 0;
  var ffRowCounter = 0;
  const ffWidth = 150;
  const ffHeight = 125;
  const ffXPos = 0;
  const ffYPos = canvHeight - ffHeight;
  const ffColor = 'navajowhite';
  drawFreeFolkArea();


  //DRAWING House Greyjoy Area
  const gjArea = svg.append('g');
  const gjAreaPadding = 50;
  var gjCellCounter = 0;
  var gjRowCounter = 0;
  const gjWidth = 150;
  const gjHeight = 75;
  const gjXPos = 235;
  const gjYPos = canvHeight - gjHeight;
  const gjColor = 'darkolivegreen';
  drawGreyjoyArea();


  //DRAWING House Baratheon Area
  const baraArea = svg.append('g');
  const baraAreaPadding = 50;
  var baraCellCounter = 0;
  var baraRowCounter = 0;
  const baraWidth = 200;
  const baraHeight = 125;
  const baraXPos = 300;
  const baraYPos = 0;
  const baraColor = 'gold';
  drawBaratheonArea();


  //DRAWING Others Area
  const othersArea = svg.append('g');
  const othersAreaPadding = 50;
  var othersCellCounter = 0;
  var othersRowCounter = 0;
  const othersWidth = 610;
  const othersHeight = 150;
  const othersXPos = canvWidth / 2 - othersWidth / 4;
  const othersYPos = canvHeight - othersHeight;
  const othersColor = 'purple';
  drawOthersArea();

  //DRAWING Lesser House Area
  const lessArea = svg.append('g');
  const lessAreaPadding = 50;
  var lessCellCounter = 0;
  var lessRowCounter = 0;
  const lessWidth = 100;
  const lessHeight = 200;
  const lessXPos = canvWidth - lessWidth;
  const lessYPos = canvHeight / 2 - (lessHeight / 2);
  const lessColor = 'lightskyblue';
  drawLessArea();

  //DRAWING House Tyrell Area
  const tyreArea = svg.append('g');
  const tyreAreaPadding = 50;
  var tyreCellCounter = 0;
  var tyreRowCounter = 0;
  const tyreWidth = 100;
  const tyreHeight = 115;
  const tyreXPos = canvWidth - tyreWidth - 20;
  const tyreYPos = 0;
  const tyreColor = 'orange';
  drawTyrellArea();

  //DRAWING House Lannister Area
  const lannArea = svg.append('g');
  const lannAreaPadding = 50;
  var lannCellCounter = 0;
  var lannRowCounter = 0;
  const lannWidth = 200;
  const lannHeight = 125;
  const lannXPos = (canvWidth / 2);
  const lannYPos = 0;
  const lannColor = 'peru';
  drawLannisterArea();

  //DRAWING House Martell Area
  const martArea = svg.append('g');
  const martAreaPadding = 50;
  var martCellCounter = 0;
  var martRowCounter = 0;
  const martWidth = 170;
  const martHeight = 160;
  const martXPos = (canvWidth) - (martWidth * 2) - 15;
  const martYPos = 0;
  const martColor = 'deeppink';
  drawMartellArea();


  //Preparing character & relations sets (charList is filled in following loop)
  var relations = getRelations();
  var charList = [];

  //List of all char circles (needed to fill activerellist when drawing all relationships)
  var charCircles = [];

  //List including circles with active relations
  var activeRelCircleList = [];

  //List for all relations (filled in drawrelations)
  var relLineList = [];




  //Loop through characters and draw according circles
  var i;
  for (i = 0; i < data.characters.length; i++) {
    var person = data.characters[i];
    processStark(person);
    processNightsWatch(person);
    processTargaryen(person);
    processFreeFolk(person);
    processGreyjoy(person);
    processBaratheon(person);
    processOthers(person);
    processLess(person);
    processTyrell(person);
    processLannister(person);
    processMartell(person);
    charList.push(person);
  }

  //Predraw all relations
  for (i = 0; i < data.characters.length; i++) {
    drawRelations(i);
  }
  checkDeaths();



  console.log(data);
  console.log(charCircles);




  //FUNCTIONS
  //Following functions are declared in d3.json scope

  //DRAWING Area functions
  function drawStarkArea() {

    starkArea.append('rect').attr('width', saWidth).attr('height', saHeight).attr('x', saXPos).attr('y', saYPos).
      style('fill', 'none').style('stroke', starkColor).style('stroke-width', strokeWidth);

    starkArea.append('text').text('House Stark').attr('x', saXPos + saWidth / 2)
      .attr('y', saYPos + saHeight + textPadding).attr("font-family", "sans-serif")
      .attr("font-size", "24px")
      .style("text-anchor", "middle");
  }

  function drawNightsWatchArea() {

    nwArea.append('rect').attr('width', nwWidth).attr('height', nwHeight).attr('x', nwXPos).attr('y', nwYPos).
      style('fill', 'none').style('stroke', nwColor).style('stroke-width', strokeWidth);

    nwArea.append('text').text('The Nights Watch').attr('x', nwXPos + nwWidth + textPadding).
      attr('y', nwYPos + nwHeight / 2).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle")
      .attr('transform', 'rotate(270,' + (nwXPos + nwWidth + textPadding) + ',' + (nwYPos + nwHeight / 2) + ')');
  }
  function drawTargaryenArea() {

    targArea.append('rect').attr('width', targWidth).attr('height', targHeight)
      .attr('x', targXPos).attr('y', targYPos).style('fill', 'none').style('stroke', targColor)
      .style('stroke-width', strokeWidth);

    targArea.append('text').text('House Targaryen').attr('x', targXPos + targWidth / 2)
      .attr('y', targYPos + targHeight + textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawFreeFolkArea() {

    ffArea.append('rect').attr('width', ffWidth).attr('height', ffHeight)
      .attr('x', ffXPos).attr('y', ffYPos).style('fill', 'none').style('stroke', ffColor)
      .style('stroke-width', strokeWidth);

    ffArea.append('text').text('Free Folk').attr('x', ffXPos + ffWidth / 2)
      .attr('y', ffYPos - textPadding / 2).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawGreyjoyArea() {

    gjArea.append('rect').attr('width', gjWidth).attr('height', gjHeight)
      .attr('x', gjXPos).attr('y', gjYPos).style('fill', 'none').style('stroke', gjColor)
      .style('stroke-width', strokeWidth);

    gjArea.append('text').text('House Greyjoy').attr('x', gjXPos + gjWidth / 2)
      .attr('y', gjYPos - textPadding / 2).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawBaratheonArea() {
    baraArea.append('rect').attr('width', baraWidth).attr('height', baraHeight)
      .attr('x', baraXPos).attr('y', baraYPos).style('fill', 'none').style('stroke', baraColor)
      .style('stroke-width', strokeWidth);

    baraArea.append('text').text('House Baratheon').attr('x', baraXPos + baraWidth / 2)
      .attr('y', baraYPos + baraHeight + textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawOthersArea() {
    othersArea.append('rect').attr('width', othersWidth).attr('height', othersHeight)
      .attr('x', othersXPos).attr('y', othersYPos).style('fill', 'none').style('stroke', othersColor)
      .style('stroke-width', strokeWidth);

    othersArea.append('text').text('Others').attr('x', othersXPos + othersWidth / 2)
      .attr('y', othersYPos - (textPadding / 2)).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawLessArea() {
    lessArea.append('rect').attr('width', lessWidth).attr('height', lessHeight).attr('x', lessXPos).attr('y', lessYPos).
      style('fill', 'none').style('stroke', lessColor).style('stroke-width', strokeWidth);

    lessArea.append('text').text('Lesser Houses').attr('x', lessXPos + lessWidth + textPadding).
      attr('y', (lessYPos / 4) * 3).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle")
      .attr('transform', 'rotate(270,' + (lessXPos + lessWidth + textPadding) + ',' + (lessYPos + lessHeight / 2) + ')');
  }
  function drawTyrellArea() {
    tyreArea.append('rect').attr('width', tyreWidth).attr('height', tyreHeight).attr('x', tyreXPos).attr('y', tyreYPos).
      style('fill', 'none').style('stroke', tyreColor).style('stroke-width', strokeWidth);

    tyreArea.append('text').text('House Tyrell').attr('x', tyreXPos + (tyreWidth / 2))
      .attr('y', tyreYPos + tyreHeight + textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawLannisterArea() {
    lannArea.append('rect').attr('width', lannWidth).attr('height', lannHeight).attr('x', lannXPos).attr('y', lannYPos).
      style('fill', 'none').style('stroke', lannColor).style('stroke-width', strokeWidth);

    lannArea.append('text').text('House Lannister').attr('x', lannXPos + (lannWidth / 2))
      .attr('y', lannYPos + lannHeight + textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }
  function drawMartellArea() {
    martArea.append('rect').attr('width', martWidth).attr('height', martHeight).attr('x', martXPos).attr('y', martYPos).
      style('fill', 'none').style('stroke', martColor).style('stroke-width', strokeWidth);

    martArea.append('text').text('House Martell').attr('x', martXPos + (martWidth / 2))
      .attr('y', martYPos + martHeight + textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
  }




  //Processing different Houses
  function processStark(person) {
    var isStark = person.faction === 'House Stark';
    if (isStark) {
      starkCellCounter++;
      var persX = getStarkX();
      var persY = getStarkY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(starkArea, persX, persY, starkColor, person.name, person.killed, person.first);

      if (starkCellCounter == 6) {
        starkCellCounter = 0;
        starkRowCounter++;
      }
    }
  }

  function processNightsWatch(person) {
    var isNW = person.faction === "Night's Watch"
    if (isNW) {
      nwCellCounter++;
      var persX = getNWX();
      var persY = getNWY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(nwArea, persX, persY, nwColor, person.name, person.killed, person.first);

      if (nwCellCounter == 3) {
        nwCellCounter = 0;
        nwRowCounter++;
      }
    }
  }

  function processTargaryen(person) {
    var isTarg = person.faction === 'House Targaryen';
    if (isTarg) {
      targCellCounter++;
      var persX = getTargX();
      var persY = getTargY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(targArea, persX, persY, targColor, person.name, person.killed, person.first);

      if (targCellCounter == 4) {
        targCellCounter = 0;
        targRowCounter++;
      }
    }
  }

  function processFreeFolk(person) {
    var isFF = person.faction === 'Free Folk';
    if (isFF) {
      ffCellCounter++;
      var persX = getFFX();
      var persY = getFFY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(ffArea, persX, persY, ffColor, person.name, person.killed, person.first);

      if (ffCellCounter == 3) {
        ffCellCounter = 0;
        ffRowCounter++;
      }
    }
  }

  function processGreyjoy(person) {
    var isGJ = person.faction === 'House Greyjoy';
    if (isGJ) {
      gjCellCounter++;
      var persX = getGJX();
      var persY = getGJY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(gjArea, persX, persY, gjColor, person.name, person.killed, person.first);

      if (gjCellCounter == 3) {
        gjCellCounter = 0;
        gjRowCounter++;
      }
    }
  }

  function processBaratheon(person) {
    var isBara = person.faction === 'House Baratheon';
    if (isBara) {
      baraCellCounter++;
      var persX = getBaraX();
      var persY = getBaraY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(baraArea, persX, persY, baraColor, person.name, person.killed, person.first);

      if (baraCellCounter == 4) {
        baraCellCounter = 0;
        baraRowCounter++;
      }
    }
  }

  function processOthers(person) {
    var isOthers = person.faction === 'Others';
    if (isOthers) {
      othersCellCounter++;
      var persX = getOthersX();
      var persY = getOthersY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(othersArea, persX, persY, othersColor, person.name, person.killed, person.first);

      if (othersCellCounter == 12) {
        othersCellCounter = 0;
        othersRowCounter++;
      }
    }
  }

  function processLess(person) {
    var isLess = person.faction === 'Lesser Houses';
    if (isLess) {
      lessCellCounter++;
      var persX = getLessX();
      var persY = getLessY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(lessArea, persX, persY, lessColor, person.name, person.killed, person.first);

      if (lessCellCounter == 2) {
        lessCellCounter = 0;
        lessRowCounter++;
      }
    }
  }

  function processTyrell(person) {
    var isTyre = person.faction === 'House Tyrell';
    if (isTyre) {
      tyreCellCounter++;
      var persX = getTyreX();
      var persY = getTyreY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(tyreArea, persX, persY, tyreColor, person.name, person.killed, person.first);

      if (tyreCellCounter == 2) {
        tyreCellCounter = 0;
        tyreRowCounter++;
      }
    }
  }

  function processLannister(person) {
    var isLann = person.faction === 'House Lannister';
    if (isLann) {
      lannCellCounter++;
      var persX = getLannX();
      var persY = getLannY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(lannArea, persX, persY, lannColor, person.name, person.killed, person.first);

      if (lannCellCounter == 4) {
        lannCellCounter = 0;
        lannRowCounter++;
      }
    }
  }

  function processMartell(person) {
    var isMart = person.faction === 'House Martell';
    if (isMart) {
      martCellCounter++;
      var persX = getMartX();
      var persY = getMartY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;
      drawPersonCircle(martArea, persX, persY, martColor, person.name, person.killed, person.first);

      if (martCellCounter == 3) {
        martCellCounter = 0;
        martRowCounter++;
      }
    }
  }

  //DRAWING a circle for a person/Character
  function drawPersonCircle(area, x, y, color, name, killed, first) {
    var killEP;

    if (killed != null) {
      killEP = killed
    } else {
      killEP = "NA"
    }
    var c = area.append('circle').attr('r', circleRad).attr('cx', x).attr('cy', y)
      .attr('fill', color).attr('id', name + '_' + i).attr('data-killed', killEP)
      .attr('data-first', first);

    //ADD Eventhandlers for the circles events

    c.on('click', function (d, index) {
      clickCircleHandler(this.id);
    });


    c.on('mouseover', function (d, index) {
      toolTip.style('left', x + 'px').style('top', (y + 22) + 'px');
      var charID = this.getAttribute('id');
      var idComps = charID.split('_');
      var name = idComps[0];
      toolTipText.text(name);
      toolTip.classed('hidden', false);
    });


    c.on('mouseout', function (d, index) {
      toolTip.classed('hidden', true);
    });


    //Predraw death sign
    var crossColor='white';
    var buff = 5;
    var crossID = name+'_cross';
    crossID =crossID.replace(' ','0');
    crossID =crossID.replace("'",'1');

    var deathCross =area.append('g').attr('id',crossID);
    deathCross.append('line').attr('x1',x-buff).attr('y1',y-buff).attr('x2',x+buff).attr('y2',y+buff)
    .attr('stroke-width',3).attr('stroke',crossColor);
    deathCross.append('line').attr('x1',x+buff).attr('y1',y-buff).attr('x2',x-buff).attr('y2',y+buff)
    .attr('stroke-width',3).attr('stroke',crossColor);
    deathCross.classed('hidden',true);

    deathCross.on('click',function(d,index){
      clickCircleHandler(name + '_'+i);
    });

    
    charCircles.push(c);


  }

  //functions regarding circles
  function clickCircleHandler(id){
    // var componentId = this.id;
     var componentId = id;
     var idParts = componentId.split("_");
 
     var isActive = false;
     for (var x = 0; x < activeRelCircleList.length; x++) {
       if (activeRelCircleList[x] === this) {
         isActive = true;
       } else if (typeof (activeRelCircleList[x]._groups) != 'undefined') {
         if (activeRelCircleList[x]._groups[0][0] === this) {
           isActive = true;
         }
       }
     }
 
     if (!isActive) {
       showRelationsFor(idParts[0]);
       activeRelCircleList.push(this);
     }
     else {
       hideRelationsFor(idParts[0]);
       for (var x = 0; x < activeRelCircleList.length; x++) {
         if (activeRelCircleList[x] === this) {
           activeRelCircleList.splice(x, 1);
         } else if (typeof (activeRelCircleList[x]._groups) != 'undefined') {
           if (activeRelCircleList[x]._groups[0][0] === this)
             activeRelCircleList.splice(x, 1);
         }
       }
 
     }
 
     console.log('circle clicked');
   }

   function ensureCirclesAboveLines(){
    //THOUGHT: drawing circles after rellines also had no effect.
    for(var i =0;i<charCircles.length;i++){
      charCircles[i].classed('hidden',true);
      charCircles[i].classed('hidden',false);
    }
  }

  function checkDeaths(){
    for(var i=0;i<charCircles.length;i++){
      var id = charCircles[i]._groups[0][0].getAttribute('id');
      
      var idComps = id.split('_');
      var name = idComps[0];
      var killed = charCircles[i]._groups[0][0].getAttribute('data-killed');
    
      var killedNr = epStringToNr(killed);
      var currentNr = epStringToNr(currentEP);
      if(killed==='NA')killedNr =Number.MAX_VALUE;
      var crossId = "#"+name +"_cross";
      crossId = crossId.replace(' ','0');
      crossId = crossId.replace("'",'1');
      var to = typeof(crossId);
      var tos = typeof(crossId.toString());
      var deathCross =d3.select(crossId.toString());
     
      if(killedNr<=currentNr){
        deathCross.classed('hidden',false);
      }else{
        deathCross.classed('hidden',true);
      }

    }
  }


  //Generating koordinates for next person from according houses
  function getStarkX() {

    return saXPos + starkCellCounter * starkAreaPadding;
  }

  function getStarkY() {

    return saYPos + starkAreaPadding / 2 + starkRowCounter * starkAreaPadding;
  }

  function getNWX() {
    if (nwCellCounter == 1) return 28;
    else return nwXPos + nwCellCounter * nwAreaPadding - 22;
  }
  function getNWY() {
    return nwYPos + nwAreaPadding / 2 + nwRowCounter * nwAreaPadding;
  }

  function getTargX() {
    if (targCellCounter == 1) return 28;
    else return targXPos + targCellCounter * targAreaPadding - 22;
  }
  function getTargY() {
    return targYPos + targAreaPadding / 2 + targRowCounter * targAreaPadding;
  }

  function getFFX() {
    if (ffCellCounter == 1) return 28;
    else return ffXPos + ffCellCounter * ffAreaPadding - 22;
  }
  function getFFY() {
    return 8 + (ffYPos + ffAreaPadding / 2 + ffRowCounter * ffAreaPadding);
  }
  function getGJX() {
    if (gjCellCounter == 1) return gjXPos + 28;
    else return gjXPos + gjCellCounter * gjAreaPadding - 22;
  }
  function getGJY() {
    return 8 + (gjYPos + gjAreaPadding / 2 + gjRowCounter * gjAreaPadding);
  }
  function getBaraX() {
    if (baraCellCounter == 1) return baraXPos + 28;
    else return baraXPos + baraCellCounter * baraAreaPadding - 22;
  }
  function getBaraY() {
    return 8 + (baraYPos + baraAreaPadding / 2 + baraRowCounter * baraAreaPadding);
  }
  function getOthersX() {
    if (othersCellCounter == 1) return othersXPos + 28;
    else return othersXPos + othersCellCounter * othersAreaPadding - 22;
  }
  function getOthersY() {
    return 8 + (othersYPos + othersAreaPadding / 2 + othersRowCounter * othersAreaPadding);
  }
  function getLessX() {
    if (nwCellCounter == 1) return 28;
    else return lessXPos + lessCellCounter * lessAreaPadding - 22;
  }
  function getLessY() {
    return lessYPos + lessAreaPadding / 2 + lessRowCounter * lessAreaPadding;
  }
  function getTyreX() {
    if (tyreCellCounter == 1) return tyreXPos + 28;
    else return tyreXPos + tyreCellCounter * tyreAreaPadding - 22;
  }
  function getTyreY() {
    return 8 + (tyreYPos + tyreAreaPadding / 2 + tyreRowCounter * tyreAreaPadding);
  }
  function getLannX() {
    if (lannCellCounter == 1) return lannXPos + 28;
    else return lannXPos + lannCellCounter * lannAreaPadding - 22;
  }
  function getLannY() {
    return 8 + (lannYPos + lannAreaPadding / 2 + lannRowCounter * lannAreaPadding);
  }
  function getMartX() {
    if (martCellCounter == 1) return martXPos + 28;
    else return martXPos + martCellCounter * martAreaPadding - 22;
  }
  function getMartY() {
    return 8 + (martYPos + martAreaPadding / 2 + martRowCounter * martAreaPadding);
  }



  //Get a person object by name
  function getPerson(name) {
    for (var x = 0; x < data.characters.length; x++) {
      if (data.characters[x].name === name) return data.characters[x];
    }
  }

  //FUNCTIONS regarding relations
  function getRelations() {
    return data.relations;
  }


  function getRelationsFor(person) {

    var resultList = [];


    for (var x = 0; x < relations.length; x++) {
      var pName = person.name;
      if (relations[x].source === pName) {
        resultList.push(relations[x]);
      }
    }

    return resultList;
  }

  function drawRelations(personIndex) {
    var person = data.characters[personIndex];

    var srcX = person.xCord;
    var srcY = person.yCord;

    for (var x = 0; x < relations.length; x++) {
      if (person.name === relations[x].source) {


        var targetName = relations[x].target;
        var target = getPerson(targetName);

        if (typeof (target) != 'undefined') {


          var tarX = target.xCord;
          var tarY = target.yCord;



          var color = 'black';
          var relType = relations[x].type;

          if (relType === 'is allied with') {
            color = 'blue';
          } else if (relType === 'is child of') {
            color = 'aqua';
          } else if (relType === 'is enemy of') {
            color = 'red'
          } else if (relType === 'is in love with') {
            color = 'pink';
          } else if (relType === 'is married to') {
            color = 'darkgoldenrod';
          } else if (relType === 'is parent of') {
            color = 'darkcyan';
          } else if (relType === 'is sibling of') {
            color = 'forestgreen';
          } else if (relType === 'killed') {
            color = 'darkviolet';
          } else if (relType === 'was killed by') {
            color = 'darkslateblue';
          } else if (relType === 'was severely injured by') {
            color = 'lightsalmon';
          }

          var relLine = svg.append('line').attr('x1', srcX).attr('y1', srcY)
            .attr('x2', tarX).attr('y2', tarY).attr('stroke-width', 2).attr('stroke', color)
            .attr('data-src', person.name)
            .attr('data-target', targetName)
            .attr('data-rel-start', relations[x].start)
            .attr('data-rel-end', relations[x].end)
            .style('visibility', 'hidden')
            .on('click', function (d, index) {

            });

          relLineList.push(relLine);


        }
      }
    }

    ensureCirclesAboveLines();


  }

  function showRelationsFor(name) {
    for (var x = 0; x < relLineList.length; x++) {

      var relSource = relLineList[x]._groups[0][0].getAttribute('data-src');
      if (relSource === name) {

        var relStart = relLineList[x]._groups[0][0].getAttribute('data-rel-start');
        var relEnd = relLineList[x]._groups[0][0].getAttribute('data-rel-end');

        var relStartNr = epStringToNr(relStart);
        var relEndNr = epStringToNr(relEnd);
        var currentNr = epStringToNr(currentEP);

        if (currentNr <= relEndNr && currentNr >= relStartNr) {
          relLineList[x]._groups[0][0].style.visibility = 'visible';
        }

      }
    }
    ensureCirclesAboveLines();
  }

  function hideRelationsFor(name) {
    for (var x = 0; x < relLineList.length; x++) {
      var relSource = relLineList[x]._groups[0][0].getAttribute('data-src');
      if (relSource === name) {
        relLineList[x]._groups[0][0].style.visibility = 'hidden';

      }
    }
  }

  function hideRelations() {


    for (var x = 0; x < relLineList.length; x++) {

      relLineList[x]._groups[0][0].style.visibility = 'hidden';


    }
    activeRelCircleList = [];

    console.log("Relations cleaned.");

  };

  function showRelations() {
    activeRelCircleList = [];
    for (var x = 0; x < relLineList.length; x++) {

      var relStart = relLineList[x]._groups[0][0].getAttribute('data-rel-start');
      var relEnd = relLineList[x]._groups[0][0].getAttribute('data-rel-end');

      var relStartNr = epStringToNr(relStart);
      var relEndNr = epStringToNr(relEnd);
      var currentNr = epStringToNr(currentEP);

      if (currentNr <= relEndNr && currentNr >= relStartNr) {
        relLineList[x]._groups[0][0].style.visibility = 'visible';
      }

    }
    activeRelCircleList = charCircles.slice(0);
    ensureCirclesAboveLines();

  }

  function updateRelations() {
    prepRelUpdate();
    for (var x = 0; x < activeRelCircleList.length; x++) {
      for (var y = 0; y < relLineList.length; y++) {
        var relLine = relLineList[y]._groups[0][0];
        var activePers;
        if (typeof (activeRelCircleList[x]._groups) != 'undefined') {
          activePers = activeRelCircleList[x]._groups[0][0];
        } else {
          activePers = activeRelCircleList[x];
        }

        var relSrc = relLine.getAttribute('data-src');
        var idComps = activePers.getAttribute('id').split('_');
        var name = idComps[0];

        if (relSrc === name) {

          var relStart = relLine.getAttribute('data-rel-start');
          var relEnd = relLine.getAttribute('data-rel-end');

          var relStartNr = epStringToNr(relStart);
          var relEndNr = epStringToNr(relEnd);
          var currentNr = epStringToNr(currentEP);

          if (currentNr <= relEndNr && currentNr >= relStartNr) {
            // relLineList[y]._groups[0][0].style.visibility = 'visible';
            relLine.style.visibility = 'visible';
          }

        }


      }
    }
    ensureCirclesAboveLines();


  }

  function prepRelUpdate() {
    for (var x = 0; x < relLineList.length; x++) {
      relLineList[x]._groups[0][0].style.visibility = 'hidden';
    }
  }







  



  //functions to get the episode string e.g s01e02 from it's number and vice versa
  function epNrToString(epNr) {
    var result;
    var epRes = 0;


    if (epNr >= 1 && epNr <= 10) {
      result = "s01";
      epRes = epNr;
    } else if (epNr > 10 && epNr <= 20) {
      result = "s02";
      epRes = epNr - 10;
    } else if (epNr > 20 && epNr <= 30) {
      result = "s03";
      epRes = epNr - 20;
    } else if (epNr > 30 && epNr <= 40) {
      result = "s04";
      epRes = epNr - 30;
    } else if (epNr > 40 && epNr <= 50) {
      result = "s05";
      epRes = epNr - 40;
    } else if (epNr == 0) {
      result = "s01e01";
    }

    result += 'e';
    if (epRes < 10) result += '0';
    result += String(epRes);


    return result;
  }

  function epStringToNr(epStr) {
    var result = 0;

    if (epStr == 's00e00') return 1;
    if (epStr == null) return Number.MAX_VALUE;

    var strParts = epStr.split('e');

    if (strParts[0] == 's01') {
      result = Number(strParts[1]);
    } else if (strParts[0] == 's02') {
      result = 10 + Number(strParts[1]);
    } else if (strParts[0] == 's03') {
      result = 20 + Number(strParts[1]);
    } else if (strParts[0] == 's04') {
      result = 30 + Number(strParts[1]);
    } else if (strParts[0] == 's05') {
      result = 40 + Number(strParts[1]);
    }
    return result;
  }


  //Event Handlers for additional controls in sub areas
  slider.on('change', function (d, index) {
    console.log('slider info: ');
    console.log('value: ' + this.value);
    var epString = epNrToString(this.value);
    console.log('ep string: ' + epString);
    console.log('ep nr: ' + epStringToNr(epString));

    epLabel.text(epString);
    currentEP = epString;
    updateRelations();
    checkDeaths();
  });

  area1.append('button').text('clear relations').on('click', function (d, i) {
    hideRelations();
  });
  area1.append('button').text('draw all relations').on('click', function (d, i) {
    showRelations();

  });




});


