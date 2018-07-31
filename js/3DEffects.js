var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    mouseX = 0, mouseY = -1200,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    SEPARATION = 100,
    AMOUNTX = 55,
    AMOUNTY = 50,
    camera,
    scene,
    renderer;
    init();
    animate();

function init() {
    var container,
        separation = 100,
        amountX = 100,
        amountY = 100,
        particles, particle;
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1,5000 );
    camera.position.z = 180;
    scene = new THREE.Scene();
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    container.appendChild( renderer.domElement );
    
    //particles

				/*var PI2 = Math.PI * 2;
				var material = new THREE.ParticleCanvasMaterial( {

					color: 0xf42f67, //color: ( Math.random() * 0xf42f67 ),
					program: function ( context ) {

						context.beginPath();
						//context.arc( 0, 0, 1, 0, PI2, true );
						context.closePath();
						context.fill();

					}

				} );

				for ( var i = 0; i < 100; i ++ ) {

					particle = new THREE.Particle( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					scene.add( particle );

				}*/

				// lines

				for (var i = 0; i < 600; i++) {

					var geometry = new THREE.Geometry();

					var vertex = new THREE.Vector3( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
					vertex.normalize();
					vertex.multiplyScalar( 650 );

					geometry.vertices.push( vertex );

					var vertex2 = vertex.clone();
					vertex2.multiplyScalar( Math.random() * 0.2 + 1 );

					geometry.vertices.push( vertex2 );

					var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: ( Math.random() * 0xf42f67 ), opacity: Math.random() } ) );
					scene.add( line );
				}

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function onDocumentMouseMove(event) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .09;
				camera.position.y += ( - mouseY + 500 - camera.position.y ) * .09;
				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}