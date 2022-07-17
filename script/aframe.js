 // A-Frame

		AFRAME.registerComponent('back-to-homepage', {
		schema: {
		default:  ''
		},
		init() {
		const hyperLink = document.querySelector('a-box');
		this.el.addEventListener('click', () => {
		window.location.href = "index.html";
		console.log('clicked');
	  });
		}
		});

    AFRAME.registerComponent('click-to-scene', {
      schema: {
      default:  ''
      },
      init() {
      const hyperLink = document.querySelector('a-box');
      this.el.addEventListener('click', () => {
      window.location.href = "scene.html";
      console.log('clicked');
      });
      }
      });

    function setScene2() {
      document.getElementById('scene1').setAttribute('visible', 'false')
      document.getElementById('scene2').setAttribute('visible', 'true')
      document.getElementById('box1').setAttribute('visible', 'false')
      document.getElementById('box2').setAttribute('visible', 'true')
      document.querySelector("#rig").object3D.position.set(0, 750, 0);
    }

    function setScene1() {
      document.getElementById('scene2').setAttribute('visible', 'false')
      document.getElementById('scene1').setAttribute('visible', 'true')
      document.getElementById('box2').setAttribute('visible', 'false')
      document.getElementById('box1').setAttribute('visible', 'true')
      document.querySelector("#rig").object3D.position.set(0, 750, 0);
    }

  

        AFRAME.registerComponent("name-on-hover", {
            schema: {
              default: ""
            },
            init: function() {
              var data = this.data;
              var el = this.el;
              var myTarget = document.querySelector("#myTarget");
              el.addEventListener("mouseenter", function() {
                myTarget.setAttribute('visible', 'true');
                
                
              });
              el.addEventListener("mouseleave", function() {
                myTarget.setAttribute('visible', 'false');
              });
            }
          });

     
        /*  AFRAME.registerComponent("click-to-expand", {
           schema:  {
             default:""
           },
           init: function() {
            var el = this.el;
             var clickToExpand = document.querySelector("#boxExpand");
             var showInfo = document.querySelector("#textArea")
             el.addEventListener('click', function (evt) {
                clickToExpand.setAttribute('width', '340');
                clickToExpand.setAttribute('height', '500');
                clickToExpand.setAttribute('depth', '10');
                showInfo.setAttribute('visible', 'true');
              
             });
             el.addEventListener('mouseleave', function(){
              clickToExpand.setAttribute('width', '170');
              clickToExpand.setAttribute('height', '250');
              clickToExpand.setAttribute('depth', '10');
              showInfo.setAttribute('visible', 'false');
              
             });
           }
         }); */

         
         AFRAME.registerComponent('change-color', {
          schema: {
            color: {default: '#000'}
          },
          init: function(){
            var data = this.data;
            this.el.addEventListener('mouseenter', function(){
              this.setAttribute('color', data.color);
            });
            this.el.addEventListener('mouseleave', function(){
              this.setAttribute('color', '#615F65');
            })
          }                
        });


        AFRAME.registerComponent("mylink", {
          // define a url in the schema
          schema: {
            href: {}
          },
          init: function() {
            // when clicked - change the location:
            this.el.addEventListener("click", (e) => {
              window.location = this.data.href;
            })
          }
        })