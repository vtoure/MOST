var margin = {top: 10, right: 5, bottom: 5, left: 45}, timewidth = 200, timeheight = 200;

var x = d3.scale.linear()
					.range([timewidth, 0]);

var y = d3.scale.linear()
					.range([timeheight, 0]);

var xAxis = d3.svg.axis()
							.scale(x)
							.orient("bottom");

var yAxis = d3.svg.axis()
							.scale(x)
							.orient("left");		//evtl. tickFormat für Achsensplit????


var svg = d3.select("#choiceChart").append("svg")
		  .attr("width", timewidth + margin.left + margin.right)
		  .attr("height", timeheight + margin.top + margin.bottom)
		.append("g")
		  .attr("transform", "translate(100,100)");

var parseDate = d3.time.format("%Y-%m-%d").parse;

d3.tsv("diffstats", function(error, d){
	if(error) throw error;
	console.log(d);
	return {version2: parseDate(d.version2),
	};
	console.log(d);
}

);	
