var ColorUpdates = function() {
    this.displayOutline = false;
    this.topColor = [255,0,0];
    this.bottomColor = [0,121,255];
    
  };
  
  
  
  window.onload = function() {
    var updates = new ColorUpdates();
    var gui = new dat.GUI();
    var controllerTop = gui.addColor(updates, 'topColor');
    var controllerBottom = gui.addColor(updates, 'bottomColor');
    var bottomColor = [0,121,255]
    var topColor = [255,0,0]
    controllerTop.onChange(function(value) {
      topColor = value
      console.log(value)
      $("a-gradient-sky").attr("material", "shader: gradient; topColor: "+topColor[0]+" "+topColor[1]+" "+topColor[2]+"; bottomColor:"+bottomColor[0]+" "+bottomColor[1]+" "+bottomColor[2]+"")
    })
  
    controllerBottom.onChange(function(value) {
      bottomColor = value
      console.log(value)
      $("a-gradient-sky").attr("material", "shader: gradient; topColor: "+topColor[0]+" "+topColor[1]+" "+topColor[2]+"; bottomColor:"+bottomColor[0]+" "+bottomColor[1]+" "+bottomColor[2]+"")
    })
  
  };