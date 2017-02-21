var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var GRAVITY = 0.3;
var JUMP = -5;
var obstacleSprites;
var numGroundSprites;

var player;
var isGameOver;

function setup() {
    isGameOver = false;
    createCanvas(400, 300);
    background(150, 200, 250);
    groundSprites = new Group();
    player = createSprite(100, ehight-75, 50, 50)
    obstacleSprites = new Group();
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
}

function draw() {
    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    } else {
    } else {
    bckground(150, 200, 250);
    player.velocity.y = player.velocity.y + GRAVITY;
    
    if (groundSprites.overlap(player)) {
        player.velocity.y = 0;
        player.position.y = (height-50) - (player.height/2);
    }
    
    if (keyDown(UP_DOWN)) {
        player.velocity.y = JUMP;
    }
    player.position.x = player.position.x + 5;
    camera.position.x = player.position.x + (width/4);
    var firstGroundSprite = groundSprites[0];
    if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
    groundSprites.remove(firstGroundSprite);
    firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
    groundSprites.add(firstGroundSprite);
    if (random() > 0.95) {
    var obstacle = createSprite(camera.position.x + width, (height-50) - 15, 30, 30);
    obstacleSprites.add(obstacle);
}
var firstObstacle = obstacleSprites[0];
if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firsttObstacle.width/2)) {
    removeSprite(firstObstacle);
    obstacleSprites.overlap(player,endGame);
    drawSprites();
}
}
function endGame() {
    isGameOver = true;
    console.log("Game Over!");
}
function mouseClicked() {
    if (isGameOver) {
        for (var n = 0; n < numGroundSprites; n++) {
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n*50;
        }
        player.position.x = 100;
        player.position.y = height-75;
        
        obstacleSprites.removeSprites();
        
        isGameOver = false;
        
    }
}