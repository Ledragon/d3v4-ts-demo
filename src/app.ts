import * as d3 from 'd3';

d3.select('body')
    .append('svg')
    .attr('width', 800)
    .attr('height', 800)
    .append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 200)
    .style('fill', 'steelblue');