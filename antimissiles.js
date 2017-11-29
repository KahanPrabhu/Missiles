


var alienShip;


function loadAlienShipModel()
{
    console.log("avbkjbkj");
    var loadingManager = new THREE.LoadingManager( function() {
    } );
    var loader = new THREE.ColladaLoader( loadingManager );
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('https://rawgit.com/KahanPrabhu/Missiles/master/E-45-steel%20detail_2_col.jpg');

    loader.load( 'https://rawgit.com/KahanPrabhu/Missiles/master/E%2045%20Aircraft_dae.dae', function ( collada ) {
        alienShip = collada.scene;
        collada.scene.traverse(function (node) {
            if (node.isMesh) {
                node.material.map = texture;
                //node.scale.set(0.5, 0.5, 0.5);
            }
        });
    });
    flyAlienship();
}

function flyAlienship()
{
    alienShip.position.x = -30;
    alienShip.position.y = 15;
    alienShip.position.z = 10;
    scene.add(alienShip);

}