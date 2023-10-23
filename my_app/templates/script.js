document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('stockChart').getContext('2d');
    
    // Replace this with your actual chart data and options
    const chartData = {
        labels: ['Date1', 'Date2', 'Date3'], // X-axis labels
        datasets: [
            {
                label: 'Stock 1',
                data: [100, 110, 120], // Replace with actual stock data
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'Stock 2',
                data: [90, 95, 85], // Replace with actual stock data
                borderColor: 'red',
                fill: false,
            },
        ],
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };
    
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
    });
    
    // Add logic to update the chart with new data when the Compare button is clicked.
    document.getElementById('compareButton').addEventListener('click', function() {
        const stockSymbol1 = document.getElementById('stockSymbol1').value;
        const stockSymbol2 = document.getElementById('stockSymbol2').value;
        // Fetch stock data and update the chart.
        // You'll need to implement the data retrieval and update logic here.
    });
});
