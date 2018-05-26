
  //THOUGHT: Relations exist to non listed characters, maybe joker char needed
  
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
    const gjXPos=235;
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


    //DRAWING Others Area
    const othersArea=svg.append('g');
    const othersAreaPadding=50;
    var othersCellCounter=0;
    var othersRowCounter=0;
    const othersWidth=610;
    const othersHeight=150;
    const othersXPos=canvWidth/2-othersWidth/4;
    const othersYPos=canvHeight-othersHeight;
    const othersColor='purple';
    drawOthersArea();

    //DRAWING Lesser House Area
    const lessArea = svg.append('g');
    const lessAreaPadding = 50;
    var lessCellCounter=0;
    var lessRowCounter=0;
    const lessWidth=100;
    const lessHeight=200;
    const lessXPos = canvWidth-lessWidth;
    const lessYPos = canvHeight/2-(lessHeight/2);
    const lessColor='lightskyblue';
    drawLessArea();

    //DRAWING House Tyrell Area
    const tyreArea= svg.append('g');
    const tyreAreaPadding = 50;
    var tyreCellCounter=0;
    var tyreRowCounter=0;
    const tyreWidth=100;
    const tyreHeight=115;
    const tyreXPos=canvWidth-tyreWidth-20;
    const tyreYPos=0;
    const tyreColor='orange';
    drawTyrellArea();

    //DRAWING House Lannister Area
    const lannArea= svg.append('g');
    const lannAreaPadding = 50;
    var lannCellCounter=0;
    var lannRowCounter=0;
    const lannWidth=200;
    const lannHeight=125;
    const lannXPos=(canvWidth/2);
    const lannYPos=0;
    const lannColor='peru';
    drawLannisterArea();

    //DRAWING House Martell Area
    const martArea= svg.append('g');
    const martAreaPadding = 50;
    var martCellCounter=0;
    var martRowCounter=0;
    const martWidth=170;
    const martHeight=160;
    const martXPos=(canvWidth)-(martWidth*2)-15;
    const martYPos=0;
    const martColor='deeppink';
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

    


    //Loop through hole dataset and draw accordingly
    var i;
    for(i =0; i<data.characters.length;i++){
      var person = data.characters[i];
      charList.push(person);
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

      drawRelations(i);
    }
    //var relList = getRelationsFor(data.characters[0]);

    //THOUGHT: DRAW all rel lines first and play with opacity hide/show
    console.log(data);
    console.log(charList);
    





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
    function drawOthersArea(){
      othersArea.append('rect').attr('width',othersWidth).attr('height',othersHeight)
      .attr('x',othersXPos).attr('y',othersYPos).style('fill','none').style('stroke',othersColor)
      .style('stroke-width',strokeWidth);

      othersArea.append('text').text('Others').attr('x',othersXPos + othersWidth/2)
      .attr('y',othersYPos-(textPadding/2)).attr("font-family", "sans-serif").attr("font-size", "24px")
      .style("text-anchor", "middle");
    }
    function drawLessArea(){
      lessArea.append('rect').attr('width', lessWidth).attr('height',lessHeight).attr('x',lessXPos).attr('y',lessYPos).
          style('fill','none').style('stroke',lessColor).style('stroke-width',strokeWidth);

        lessArea.append('text').text('Lesser Houses').attr('x',lessXPos+lessWidth+textPadding).
          attr('y',(lessYPos/4)*3).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle")
          .attr('transform','rotate(270,'+(lessXPos+lessWidth+textPadding)+','+(lessYPos+lessHeight/2)+')');
    }
    function drawTyrellArea(){
      tyreArea.append('rect').attr('width', tyreWidth).attr('height',tyreHeight).attr('x',tyreXPos).attr('y',tyreYPos).
          style('fill','none').style('stroke',tyreColor).style('stroke-width',strokeWidth);

      tyreArea.append('text').text('House Tyrell').attr('x',tyreXPos + (tyreWidth/2))
          .attr('y',tyreYPos + tyreHeight+textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle");
    }
    function drawLannisterArea(){
      lannArea.append('rect').attr('width', lannWidth).attr('height',lannHeight).attr('x',lannXPos).attr('y',lannYPos).
          style('fill','none').style('stroke',lannColor).style('stroke-width',strokeWidth);

      lannArea.append('text').text('House Lannister').attr('x',lannXPos + (lannWidth/2))
          .attr('y',lannYPos + lannHeight+textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
          .style("text-anchor", "middle");
    }
    function drawMartellArea(){
      martArea.append('rect').attr('width', martWidth).attr('height',martHeight).attr('x',martXPos).attr('y',martYPos).
          style('fill','none').style('stroke',martColor).style('stroke-width',strokeWidth);

      martArea.append('text').text('House Martell').attr('x',martXPos + (martWidth/2))
          .attr('y',martYPos + martHeight+textPadding).attr("font-family", "sans-serif").attr("font-size", "24px")
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
      drawPersonCircle(starkArea,persX,persY,starkColor,person.name,person.killed,person.first);

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
        drawPersonCircle(nwArea,persX,persY,nwColor,person.name,person.killed,person.first);

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
        drawPersonCircle(targArea,persX,persY,targColor,person.name,person.killed,person.first);

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
        drawPersonCircle(ffArea,persX,persY,ffColor,person.name,person.killed,person.first);

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
        drawPersonCircle(gjArea,persX,persY,gjColor,person.name,person.killed,person.first);

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
        drawPersonCircle(baraArea,persX,persY,baraColor,person.name,person.killed,person.first);

        if(baraCellCounter==4){
          baraCellCounter=0;
          baraRowCounter++;
        }
      }
    }

    function processOthers(person){
      var isOthers = person.faction==='Others';
      if(isOthers){
        othersCellCounter++;
        var persX=getOthersX();
        var persY=getOthersY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(othersArea,persX,persY,othersColor,person.name,person.killed,person.first);

        if(othersCellCounter==12){
          othersCellCounter=0;
          othersRowCounter++;
        }
      }
    }

    function processLess(person){
      var isLess = person.faction==='Lesser Houses';
      if(isLess){
        lessCellCounter++;
        var persX=getLessX();
        var persY=getLessY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(lessArea,persX,persY,lessColor,person.name,person.killed,person.first);

        if(lessCellCounter==2){
          lessCellCounter=0;
          lessRowCounter++;
        }
      }
    }

    function processTyrell(person){
      var isTyre = person.faction==='House Tyrell';
      if(isTyre){
        tyreCellCounter++;
        var persX=getTyreX();
        var persY=getTyreY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(tyreArea,persX,persY,tyreColor,person.name,person.killed,person.first);

        if(tyreCellCounter==2){
          tyreCellCounter=0;
          tyreRowCounter++;
        }
      }
    }

    function processLannister(person){
      var isLann = person.faction==='House Lannister';
      if(isLann){
        lannCellCounter++;
        var persX=getLannX();
        var persY=getLannY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(lannArea,persX,persY,lannColor,person.name,person.killed,person.first);

        if(lannCellCounter==4){
          lannCellCounter=0;
          lannRowCounter++;
        }
      }
    }

    function processMartell(person){
      var isMart = person.faction==='House Martell';
      if(isMart){
        martCellCounter++;
        var persX=getMartX();
        var persY=getMartY();
        data.characters[i].xCord=persX;
        data.characters[i].yCord=persY;
        drawPersonCircle(martArea,persX,persY,martColor,person.name,person.killed,person.first);

        if(martCellCounter==3){
          martCellCounter=0;
          martRowCounter++;
        }
      }
    }

    //DRAWING a circle for a person/Character
    function drawPersonCircle(area,x,y,color,name,killed,first){
      var killEP;
      
      if(killed!=null){
        killEP = killed
      }else{
        killEP = "NA"
      }
      var c =area.append('circle').attr('r',circleRad).attr('cx',x).attr('cy',y)
      .attr('fill',color).attr('id',name+'_'+i).attr('data-killed',killEP).attr('data-first',first)
      .on('click',function(d,index){
        
        var componentId = this.id;
        var idParts = componentId.split("_");

        var isActive = false;
        for(var x =0;x<activeRelCircleList.length;x++){
            if(activeRelCircleList[x]==this)isActive=true;          
        }

        if(!isActive){
          showRelationsFor(idParts[0]);
          activeRelCircleList.push(this);
        }
        else{
          hideRelationsFor(idParts[0]);
          for(var x=0;x<activeRelCircleList.length;x++){
            if(activeRelCircleList[x]==this)activeRelCircleList.splice(x,1);
          }

        }
        charCircles.push(c);
        console.log('circle clicked');
        
      } );

      
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
    function getOthersX(){
      if(othersCellCounter==1)return othersXPos+28;
      else return othersXPos + othersCellCounter*othersAreaPadding-22;
    }
    function getOthersY(){
      return 8+(othersYPos+othersAreaPadding/2+othersRowCounter*othersAreaPadding);
    }
    function getLessX(){
      if(nwCellCounter==1)return 28;
      else return lessXPos + lessCellCounter*lessAreaPadding-22;
    }
    function getLessY(){
      return lessYPos+lessAreaPadding/2+lessRowCounter*lessAreaPadding;
    }
    function getTyreX(){
      if(tyreCellCounter==1)return tyreXPos+28;
      else return tyreXPos + tyreCellCounter*tyreAreaPadding-22;
    }
    function getTyreY(){
      return 8+(tyreYPos+tyreAreaPadding/2+tyreRowCounter*tyreAreaPadding);
    }
    function getLannX(){
      if(lannCellCounter==1)return lannXPos+28;
      else return lannXPos + lannCellCounter*lannAreaPadding-22;
    }
    function getLannY(){
      return 8+(lannYPos+lannAreaPadding/2+lannRowCounter*lannAreaPadding);
    }
    function getMartX(){
      if(martCellCounter==1)return martXPos+28;
      else return martXPos + martCellCounter*martAreaPadding-22;
    }
    function getMartY(){
      return 8+(martYPos+martAreaPadding/2+martRowCounter*martAreaPadding);
    }



  //FUNCTIONS regarding relations
  function getRelations(){
    return data.relations;
  }


  function getPerson(name){
    for(var x =0;x<data.characters.length;x++){
      if(data.characters[x].name===name)return data.characters[x];
    }
  }

  function getRelationsFor(person){
    
    var resultList = [];

    
    for(var x =0;x<relations.length;x++){
      var pName = person.name;
      if(relations[x].source === pName){
        resultList.push(relations[x]);
      }
    }

    return resultList;
  }

  function drawRelations(personIndex){
     var person = data.characters[personIndex];
      //var person = charList[x];
      //currentRelations = getRelationsFor(person);

      var srcX = person.xCord;
      var srcY = person.yCord;

      for(var x =0;x<relations.length;x++){
        if(person.name===relations[x].source){


        var targetName = relations[x].target;
        var target = getPerson(targetName);
        var tarX = target.xCord;
        var tarY = target.yCord;

               

        var color = 'black';
        var relType = relations[x].type;

        if(relType==='is allied with'){
          color='blue';
        }else if(relType==='is child of'){
          color='aqua';
        }else if(relType==='is enemy of'){
          color='red'
        }else if(relType==='is in love with'){
          color='pink';
        }else if(relType==='is married to'){
          color='darkgoldenrod';
        }else if(relType==='is parent of'){
          color='darkcyan';
        }else if(relType==='is sibling of'){
          color='forestgreen';
        }else if(relType==='killed'){
          color='darkviolet';
        }else if(relType==='was killed by'){
          color='darkslateblue';
        }else if(relType==='was severely injured by'){
          color='lightsalmon';
        }

        var relLine = svg.append('line').attr('x1',srcX).attr('y1',srcY)
        .attr('x2',tarX).attr('y2',tarY).attr('stroke-width',2).attr('stroke',color)
        .attr('data-src',person.name)
        .attr('data-target',targetName)
        .style('visibility','hidden')
        .on('click',function(d,index){
          
        });
        
        relLineList.push(relLine);



      }
      }




  }

  function showRelationsFor(name){
      for(var x=0;x<relLineList.length;x++){
      //  console.log(relLineList[x]);
       // console.log(relLineList[x]._groups[0][0]);
        //console.log(relLineList[x]._groups[0][0].getAttribute('data-src'));
      // console.log(relLineList[x].attr("attributes"));
        var relSource = relLineList[x]._groups[0][0].getAttribute('data-src');
        if(relSource===name){
          //relLineList[x]._groups[0][0].style('visibility','visible');
          relLineList[x]._groups[0][0].style.visibility = 'visible';
         // relLineList[x].style('visibility','visible');
        }
      }
  }

  function hideRelationsFor(name){
    for(var x=0;x<relLineList.length;x++){
         var relSource = relLineList[x]._groups[0][0].getAttribute('data-src');
        if(relSource===name){
          relLineList[x]._groups[0][0].style.visibility = 'hidden';
         
        }
      }
  }

  function hideRelations(){
   
      
      for(var x =0;x<relLineList.length;x++){
       
       relLineList[x]._groups[0][0].style.visibility = 'hidden';
      
   
      }
      activeRelCircleList=[];

      console.log("background clicked. Relations cleaned.");
    
  };

  function showRelations(){
    activeRelCircleList=[];
    for(var x =0;x<relLineList.length;x++){
       
      relLineList[x]._groups[0][0].style.visibility = 'visible';
      
  
     }
     activeRelCircleList = charCircles.splice(0);
  }


  d3.select('body').append('button').text('clear relations').on('click',function(d,i){
    hideRelations();
  });
  d3.select('body').append('button').text('draw all relations').on('click',function(d,i){
    showRelations();
  });
});


