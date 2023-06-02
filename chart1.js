const ctx = document.getElementById('lineChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May', 'June', 'July', 'Aug', 'Sep' , 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Earnings in $',
        data: [2000, 2500, 3600, 2000, 2450, 1500, 3000, 2800, 2300, 3200, 2500, 3900],
        borderWidth: 1,
        backgroundColor: [
            'rgba(85, 85, 85, 1)'
        ],
        borderColor: [
            'rgb(41,155,99)'
        ],
      }]
    },
    options: {
      responsive: true
    }
  });
