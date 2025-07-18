import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

export function initializeCharts() {
    const charts = {};
    
    // Initialize T-s Diagram
    charts.tsChart = initializeTsChart();
    
    // Initialize Performance Chart
    charts.performanceChart = initializePerformanceChart();
    
    return charts;
}

function initializeTsChart() {
    const ctx = document.getElementById('tsChart').getContext('2d');
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Brayton Cycle',
                data: [],
                borderColor: '#87CEEB',
                backgroundColor: 'rgba(135, 206, 235, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.1,
                pointBackgroundColor: '#87CEEB',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `T: ${context.parsed.y.toFixed(1)} K, s: ${context.parsed.x.toFixed(3)} kJ/kg·K`;
                        }
                    }
    // Simplified calculation for demonstrat
