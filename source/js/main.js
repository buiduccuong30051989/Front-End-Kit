$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//Global var
var FINHAY = {};

(function ($) {

  // USE STRICT
  "use strict";

  //----------------------------------------------------/
  // Predefined Variables
  //----------------------------------------------------/
  var $window = $(window),
    $document = $(document),
    $body = $('body');


  //----------------------------------------------------/
  // UTILITIES
  //----------------------------------------------------/

  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  //----------------------------------------------------/
  // VALIDATE
  //----------------------------------------------------/
  FINHAY.vadidate = function () {
    var $validate = $(".validate");
    if ($validate.exists()) {
      $validate.validate( {
        rules: {
          money: {
            required: true
          },
          password: {
            required: true,
            minlength: 8
          },
          confirm_password: {
            required: true,
            minlength: 8,
            equalTo: "#password"
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          password: {
            required: "Mời nhập password",
            minlength: "Ít nhất 8 kí tự"
          },
          confirm_password: {
            required: "Mời nhập password",
            minlength: "Ít nhất 8 kí tự",
            equalTo: "Mật khẩu chưa trùng khớp"
          },
          email: "Email sai định dạng, hãy kiểm tra lại"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
          // Add the `help-block` class to the error element
          error.addClass( "help-block" );

          if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.parent( "label" ) );
          } else {
            error.insertAfter( element.parent(".input-wrapper") );
          }
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".input-wrapper" ).addClass( "has-error" ).removeClass( "has-success" );
          $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".input-wrapper" ).addClass( "has-success" ).removeClass( "has-error" );
          $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        }
      } );

      $('.validate input').on('blur keyup', function() {
        if ($validate.valid()) {
            $('#submit').prop('disabled', false);  
        } else {
            $('#submit').prop('disabled', 'disabled');
        }
      });
    };
  };

//----------------------------------------------------/
// CHART
//----------------------------------------------------/
  FINHAY.chart = function () {
    if (document.getElementById('canvas')) {
      var color = Chart.helpers.color;
      var barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'line',
            label: 'Dataset 2',
            backgroundColor: ['transparent'],
            borderColor: ['rgba(255,255,255,.8)'],
            borderWidth: 2,
              data: [1, 0.5, 1.1, 1, 1.3, 1.4, 0.5],
          },
                {
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: ['rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)', 'rgba(247, 248, 248, 0.34)'],
            maxBarThickness: 1,      
            data: [1, 1, 1.5, 1.2, 1.3, 1.2, 0.5],
          }],
        borderWidth: 8,
      };

      // Define a plugin to provide data labels
      Chart.plugins.register({
        afterDatasetsDraw: function(chart) {
          var ctx = chart.ctx;

          chart.data.datasets.forEach(function(dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
              meta.data.forEach(function(element, index) {
                // Draw the text in black, with the specified font
                ctx.fillStyle = 'rgb(255, 255, 255)';

                var fontSize = 16;
                var fontStyle = 'normal';
                var fontFamily = 'Helvetica Neue';
                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                // Just naively convert to string for now
                var dataString = dataset.data[index].toString();

                // Make sure alignment settings are correct
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                var padding = 5;
                var position = element.tooltipPosition();
                ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
              });
            }
          });
        }
      });

      var ctx = document.getElementById('canvas').getContext('2d');
      window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        
        options: {
          legend: {
            display: false,
            labels: {
                fontColor: "white",
                fontSize: 18
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              barThickness: 11,
              ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 2,
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    stepSize: 2,
                    beginAtZero: true
                }
            }],
          },
        }
      });
    };
  };

  FINHAY.chartPortfolio = function () {
    if(document.getElementById('canvasChartPortfolio')) {
      var config = {
        type: 'line',
        data: {
          labels: [['Tháng', '1'], ['Tháng', '2'], ['Tháng', '3'], ['Tháng', '4'], ['Tháng', '5'], ['Tháng', '6'],
          ['Tháng', '7'], ['Tháng', '8'], ['Tháng', '9'], ['Tháng', '10'], ['Tháng', '11'], ['Tháng', '12']],
          datasets: [{
            label: 'Đầu tư với cấu trúc Rùa Hoàn Kiếm',
            fill: false,
            backgroundColor: "#41b649",
            borderColor: "#41b649",
            data: [
              "100000",
              "110000",
              "120000",
              "130000",
              "140000",
              "150000",
              "160000",
              "170000",
              "180000",
              "190000",
              "140000",
              "170000"
            ]
          }, {
            label: 'Gửi tiết kiệm ngân hàng với lãi suất 6.5%/năm',
            fill: false,
            backgroundColor: "#ccc",
            borderColor: "#ccc",
            data: [
              "100000",
              "110000",
              "111000",
              "112000",
              "113000",
              "114000",
              "115000",
              "116000",
              "118000",
              "119000",
              "119400",
              "119700"
            ],
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom'
          }
        }
      };
      var ctx = document.getElementById('canvasChartPortfolio').getContext('2d');
      window.myLine = new Chart(ctx, config);
    }; 
  };

  FINHAY.chartArea = function () {
    if(document.getElementById('chart-area')) {
      var config = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              70,
              20,
              15,
              12
            ],
            backgroundColor: [
              'rgba(0,154,70,1)',"rgba(0,154,70,.8)","rgba(0,154,70,.5)", "rgba(0,154,70,.2)"
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'SCA',
            'BCF',
            'VF1',
            'VBF'
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: false,
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, config);
    };
  }

//----------------------------------------------------/
// DATATABLES
//----------------------------------------------------/
  FINHAY.dataTablesDrawHistory = function () {
    $('#data-table-draw-history').DataTable( {
      "dom": '<"top"ip>rt<"bottom"ip><"clear">',
      language: {
        "info": "Đang xem _START_ - _END_ của _TOTAL_",
        paginate: {
          next: '&#9658;', // or '→'
          previous: '&#9664;' // or '←' 
        }
      },
     columnDefs: [ {
      targets: [2,3,4],
      orderable: false
    } ],
      pagingType: "simple"
    });
  };

  FINHAY.dataTablePortfolio = function () {
    $('#data-table-draw-history').DataTable( {
      "dom": '<"top">rt<"bottom"><"clear">',
      language: {
        "info": "Đang xem _START_ - _END_ của _TOTAL_",
      },
     columnDefs: [ {
      targets: [0,1,2,3,4],
      orderable: false
    } ],
      pagingType: "simple"
    });
  };

//----------------------------------------------------/
// SUGGESTION
//----------------------------------------------------/
  FINHAY.suggesstion = function () {
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substringRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substringRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    var money = ['50.000đ', '500.000đ', '5.000.000đ'];

    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'money',
        source: substringMatcher(money)
      }
    );
  };

//----------------------------------------------------/
// RANGE SLIDER
//----------------------------------------------------/
  FINHAY.rangeSlider = function () {
    var slider = $(".slider-range").slider({
    range: "min",     
    value: 0,
    min: 0,
    max: 100,
    step: 1,
      create: function(event, ui) {
        var tooltipRange = $('<div class="tooltipRange">Mức độ chấp nhận rủi ro của bạn</div>');
        
        $(event.target).find('.ui-slider-handle').append(tooltipRange);
      },
    });
  };
  
  //Window load functions
  $window.on("load", function(){
    
  });

  //Document ready functions
  $document.ready(
    FINHAY.vadidate(),
    FINHAY.chart(),
    FINHAY.suggesstion(),
    FINHAY.dataTablesDrawHistory(),
    FINHAY.rangeSlider(),
    FINHAY.chartArea(),
    FINHAY.chartPortfolio()
  );

  //Document resize functions
  $window.resize(function () {
  });

  //Document scrool functions
  $window.scroll(function () {
  });

})(jQuery);