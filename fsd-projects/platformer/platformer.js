$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    //TODO 2 - Create Platforms 
createPlatform(600, 500, 300, 20, "blue")
createPlatform(200, 400, 300, 20, "blue")
createPlatform(500, 630, 300, 20, "blue",)
createPlatform(600, 400, 300, 20, "blue")
createPlatform(100, 700, 300, 20, "blue")
createPlatform(1000, 600, 300, 20, "blue")
createPlatform(1300, 400, 300, 20, "blue")




    // TODO 3 - Create Collectables
createCollectable("dragonball", 600, 400, .03, 0 ,300, 700, 1);
createCollectable("dragonball", 600, 100, .03, 0 ,100, 100, 1);
createCollectable("apple" , 500, 100, .01, 0, 100, 500, 4);
createCollectable("apple" , 700, 300, .01, 0, 200, 300, 2);
createCollectable("cloud", 600, 400, .02, 0, 100, 300, 2);

    
    // TODO 4 - Create Cannons
createCannon("top", 300, 2000);
createCannon("right", 300, 700);
createCannon("left", 300, 2000);
createCannon("top", 700, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
