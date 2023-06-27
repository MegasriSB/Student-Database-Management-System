
function getprogress(){
let menuToggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        menuToggle.onclick = function () {
          menuToggle.classList.toggle('active');
          navigation.classList.toggle('active');
        }

        let list = document.querySelectorAll('.list')
        for (let i = 0; i < list.length; i++) {
          list[i].onclick = function () {
            let j = 0;
            while (j < list.length) {
              list[j++].className = 'list';
            }
            list[i].className = 'list active';
          }
        }
        "use strict";

        var $window = $(window);

        function run() {
          var fName = arguments[0],
            aArgs = Array.prototype.slice.call(arguments, 1);
          try {
            fName.apply(window, aArgs);
          } catch (err) {}
        }

        function _chart() {
          $(".b-skills").appear(function () {
            setTimeout(function () {
              $(".chart").easyPieChart({
                easing: "easeOutElastic",
                delay: 3000,
                barColor: "#369670",
                trackColor: "#fff",
                scaleColor: false,
                lineWidth: 21,
                trackWidth: 21,
                size: 200,
                lineCap: "round",
                onStep: function (from, to, percent) {
                  this.el.children[0].innerHTML = Math.round(percent);
                },
              });
            }, 150);
          });
        }

        $(document).ready(function () {
          run(_chart);
        });
      }
