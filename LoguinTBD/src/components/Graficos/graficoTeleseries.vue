<template>
  <div class="svg-line-container" id="bCanvas">
  	<h2 class="center">Gráfico de Teleseries</h2>
  </div>
</template>

<script>
import * as d3 from 'd3'
var vm = this;
vm.users = [];
export default {
  name: 'barcharts',
  props: {
    labelOne: {
      default : 'Frecuencia'
    },
    colorOne: {
      default: '#4682b4'
    },
    labelTwo: {
      default : 'Frecuencia'
    },
    colorTwo: {
      default: '#d3d3d3'
    },
    data: {
      default: function () { 
        return {
          
        }
        
      }
    }
  },
  data () {
   return{
      
    }
  },
  mounted () {
    console.log('Index.vue');

    // GET /someUrl
    this.$http.get('http://localhost:8090/Tingeso1/students')
    .then(response=>{
       // get body data
       console.log('data', response.data);
      this.createLine('#bCanvas', response.data, this.labelOne, this.colorOne, this.labelTwo, this.colorTwo);
    }, response=>{
       // error callback
       console.log('error cargando datos');
    })
  },
  methods: {
    createLine(id, csv, labelOne, colorOne, labelTwo, colorTwo) {
      var canvasWidth = 600
      var canvasHeight = 200
      var margins = {top: 0, bottom: 30, left: 50, right: 0}
      var width = canvasWidth - margins.left - margins.right
      var height = canvasHeight - margins.top - margins.bottom
      // var width = barHeight * (csv.length - 1)
      var canvas = d3.select(id).append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .classed("svg-content", true)
        .append("svg:g")
      var x = d3.scaleBand()
        .domain(d3.entries(csv).map(function (d) { return d.value.name}))
        .rangeRound([0, width]).padding(0.2)
      var y = d3.scaleLinear()
        //.domain([0, d3.max(csv, function (d) {return d.dollars})])
        .domain([0, 100])
        .range([height, 0])
   
      // Define the axes
      var xAx = d3.axisBottom(x).tickSize(0)
      var yAx = d3.axisLeft(y)
      canvas
        .append('g')
        .attr('class', 'spark-y axis')
        .attr("transform", "translate(" + margins.left + ",0)")
        .call(yAx)
      canvas
        .append('g')
        .attr('class', 'spark-x axis')
        .attr("transform", "translate(" + margins.left + "," + height + ")")
        .call(xAx)
      canvas.selectAll(".studentId").data(d3.entries(csv))
        .enter()
        .append("rect")
        .attr("transform", "translate(" + margins.left + ",0)")
        .attr('class', 'studentId')
        .attr("x", function (d) { return x(d.value.name) })
        .attr("width", x.bandwidth()/2 )
        .attr("y", function (d) { return y(d.value.studentId) })
        .attr("height", function (d) { return height - y(d.value.studentId) })
        .style( "fill", colorOne )
     var bar = canvas.selectAll(".actor").data(d3.entries(csv))
        .enter()
        .append("rect")
        .attr("transform", "translate(" + margins.left + ",0)")
        .attr("class", "actor")
        .attr("x", function(d) { return x(d.value.name) + x.bandwidth()/2 })
        .attr("width", x.bandwidth()/2)
        .attr("y", function(d) { return y(d.value.studentId); })
        .attr("height", function(d) { return height - y(d.value.studentId); })
        .style( "fill", colorTwo )                                                
      canvas
        .append("rect")
        .attr("y", 200)
        .attr("x", width / 2 - 50)
        .attr("transform", "translate(0,-8)")
        .attr("width", 8)
        .attr("height", 8)
        .style( "fill", colorOne )
      canvas
        .append("text")
        .attr("class", "spark-text")
        .attr("y", 200)
        .attr("x", width / 2 - 40)
        .text(labelOne)
        .attr("fill", "black")
      
      }
  },
  watch: {
    labelOne: {
      handler: function (val, oldVal) {
        d3.select('#bCanvas svg').remove()
        this.createLine('#bCanvas', this.data, val, this.colorOne, this.labelTwo, this.colorTwo)
      }
    },
    colorOne: {
      handler: function (val, oldVal) {
        d3.select('#bCanvas svg').remove()
        this.createLine('#bCanvas', this.data, this.labelOne, val, this.labelTwo, this.colorTwo)
      }
    },
    labelTwo: {
      handler: function (val, oldVal) {
        d3.select('#bCanvas svg').remove()
        this.createLine('#bCanvas', this.data, this.labelOne, this.colorOne, val, this.colorTwo)
      }
    },
    colorTwo: {
      handler: function (val, oldVal) {
        d3.select('#bCanvas svg').remove()
        this.createLine('#bCanvas', this.data, this.labelOne, this.colorOne, this.labelTwo, val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.spark {
  stroke: steelblue;
  stroke-width: 1;
}
.svg-line-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: top;
    overflow: visible;
}
.svg-content {
    display: inline-block;
    position: absolute;
    overflow: visible !important;
    top: 0;
    left: 0;
}
.axis {
    shape-rendering: crispEdges;
}
.spark-x line {
  stroke: lightgrey;
}
.spark-x .minor {
  stroke-opacity: .5;
}
.spark-x path {
  display: block;
}
.spark-y line, .spark-y path {
  fill: #999;
  stroke: #000;
}
.axis path,
.axis line {
    fill: none;
    stroke: grey;
    stroke-width: 1;
    shape-rendering: crispEdges;
}
</style>