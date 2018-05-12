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

    //DRAWING HOUSE STARK AREA
    var circleRad = 10;
    var starkArea = svg.append('g');
    var starkAreaPadding = 50;
    var starkCellCounter=0;
    var starkRowCounter =0;
    var saWidth= 350;
    var saHeight= 150;
    var saXPos = canvWidth/2-(saWidth/2);
    var saYPos = canvHeight/2-(saHeight/2);

    starkArea.append('rect').attr('width',saWidth).attr('height',saHeight).attr('x',saXPos).attr('y',saYPos).
    style('fill','none').style('stroke','blue').style('stroke-width',3);

    starkArea.append('text').text('House Stark').attr('x',saXPos+saWidth/2).attr('y',saYPos+saHeight+20).attr("font-family", "sans-serif")
    .attr("font-size", "24px")
    .style("text-anchor", "middle");

    //DRAWING HOUSE X AREA


    var i;
    for(i =0; i<data.characters.length;i++){
      var person = data.characters[i];
      processStark(person);
    }

    console.log(data);


    function getStarkX(){

      return saXPos + starkCellCounter*starkAreaPadding;
    }

    function getStarkY(){

        return saYPos+starkAreaPadding/2+starkRowCounter*starkAreaPadding;
    }

    function processStark(person){
      var isStark = person.faction==='House Stark';
    if(isStark){
      starkCellCounter++;
      var persX = getStarkX();
      var persY = getStarkY();
      data.characters[i].xCord = persX;
      data.characters[i].yCord = persY;

      starkArea.append('circle').attr('r',circleRad).attr('cx',persX).attr('cy',persY)
      .attr('fill','blue').attr('id',person.name);
      if(starkCellCounter==6){
        starkCellCounter=0;
        starkRowCounter++;
      }
    }
    }


});
