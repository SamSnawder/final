<script>
var kyPromise = d3.json("kydata.json");
var successFCN = function(kydata)
{console.log("data collected", kydata);}
var failFCN = function(errormsg)
{console.log("error", errormsg);}
kyPromise.then(successFCN,failFCN);

var createLabels = function(lengths,target)
{
    var labels = d3.select(target)
    .append("g")
    .classed("labels",true)
    
    labels.append("text")
    .attr("id","graphtitle")
    .text("KY School Records in Track & Field")
    .classed("title",true)
    .attr("text-anchor","middle")
    .attr("x",lengths.margins.left_(lengths.graph.width/2))
    .attr("y",lengths.margins.top-5)
    
    labels.append("g")
    .attr("transform","translate(20,"+(lengths.margins.top+lengths.graph.height/2))")
    .append("text")
    .text("Average School Record Time")
    .classed("label",true)
    .attr("text-anchor","middle")
    .attr("transform","rotate(90)")
    
    var xAxis = d3.axisBottom();
    xAxis.scale(xScale);
    .domain([0,180])
    .range([0,width])
    
    var yAxis = d3.axisLeft()
    yAxis.scale(yScale)
    .domain([0,50])
    .range([height,0])
    
    var zAxis = d3.scaleLinear()
    .domain([0,10000])
    .range([0,50])
    
    svg.append("g")
        .selectAll ("bubble")
        .data(kydata)
        .enter()
        .append("bubble")
        .attr("x",function(kydata){return x(kydata.400M,400W)})
        .attr("y",function(kydata){return y(kydata.800M,800W)})
        .attr("z",function(kydata){return z(kydata.1600M,1600W)})
    

    svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(0,"+(h - padding)+"))
    .call (xAxis);
          
    svg.append ("g")
    .attr("class","axis")
    .attr("transform",translate("+padding+,0)")
    .call (yAxis);
          
    
}
          
</script>

