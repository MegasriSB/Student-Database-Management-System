
function getidp(){
  const list = document.querySelectorAll(".list");
  function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

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
                  lineWidth: 17,
                  trackWidth: 17,
                  size: 180,
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
