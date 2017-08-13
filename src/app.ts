import * as d3 from 'd3';

d3.select('body')
    .append('svg')
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 30)
    .style('fill', 'steelblue');