const ctx2 = document.getElementById('doughnut').getContext('2d');

  var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Academic', 'Non-academic', 'Administration', 'Others'],
      datasets: [{
        label: 'Employees',
        data: [49, 14, 9, 3],
        borderWidth: 1,
        backgroundColor: [
            'rgba(41, 155, 99, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(120, 46, 139, 1)',
        ],
        borderColor: [
            'rgba(41, 155, 99, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(120, 46, 139, 1)',
        ],
      }]
    },
    options: {
      responsive: true
    }
  });
