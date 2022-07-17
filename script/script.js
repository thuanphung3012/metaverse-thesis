/* mapboxgl.accessToken = 'pk.eyJ1IjoidGh1YW5waHVuZzMwMTIiLCJhIjoiY2t1b2k2aTZnNGJ1dDJvcWpxZ3VuOWRkZCJ9.l2BWiNB4L70-dgrPiwa2Kw';

		let origin = [-73.98724489778544,40.75563365640227];
	
	
		let originAnimal = [-73.98692532166726,40.75603833781031];
		let originBuilding = [-73.98661631922302,40.75587552045056]
		let originAltitude = 0;

		var modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
			originBuilding,
			originAltitude
		);
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v10',
			center: origin,
			zoom: 18,
			pitch: 40,
			bearing: 0
		});


		map.on('style.load', function () {
			map.addLayer({
				id: 'custom_layer',
				type: 'custom',
				renderingMode: '3d',
				onAdd: function (map, mbxContext) {

					window.tb = new Threebox(
						map,
						mbxContext,
						{
						defaultLights: true,
						enableTooltips: true,
					
					});
					
					
					
					

					let animal = {
						obj: './assets/3D-models/elephant.gltf',
						type: 'gltf',
						scale: 1,
						units: 'meters',
						anchor: 'center',
						rotation: { x: 90, y: 90, z: 0 } //default rotation
					}

					tb.loadObj(animal, function (model) {
						model.setCoords(originAnimal);
						model.addTooltip("An elephant in the middle of nowhere", true);
						
						tb.add(model);
					})
					

					let building = {
						obj: './assets/3D-models/building-1.gltf',
						type: 'gltf',
						scale: 0.5,
						units: 'meters',
						anchor: 'center',
						rotation: { x: 90, y: 20, z: 0 } //default rotation
					}
					
					tb.loadObj(building, function (model) {
						model.setCoords(originBuilding);
						model.addTooltip("The Met Museum", true);
						model.addEventListener()
						model.castShadow = true;
						model.selected = true;
						tb.add(model);
						
					})

					
				},
				render: function (gl, matrix) {
					tb.update();
				}
			});
			
		})
		
		const geojson = {
			'type': 'FeatureCollection',
			'features': [
			  {
				'type': 'Feature',
				'geometry': {
				  'type': 'Point',
				  'coordinates': [-73.98668507164457,40.755846949563534]
				},
				'properties': {
				  'title': 'Link',
				  'description': '<p><a href="scene.html" target="_blank" title="Opens in a new window">View scene</a></p>'
				}
			  },
			  {
				'type': 'Feature',
				'geometry': {
				  'type': 'Point',
				  'coordinates': [-73.98842193635285,40.75495061210674]
				},
				'properties': {
				  'title': 'Mapbox',
				  'description': 'San Francisco, California'
				}
			  }
			]
		  };	
		for (const feature of geojson.features) {
			// create a HTML element for each feature
			const el = document.createElement('div');
			el.className = 'markers';
	
			// make a marker for each feature and add it to the map
			new mapboxgl.Marker(el)
			  .setLngLat(feature.geometry.coordinates)
			  .setPopup(
				new mapboxgl.Popup({ offset: 25 }) // add popups
				  .setHTML(
					`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
				  )
			  )
			  .addTo(map);
		  }
		



		 






	


			
		 */

		  

		  // Toggle on scene when hit button
		  function toggleVisible() {
			document.getElementById("scene").style.visibility = "visible";
			document.getElementById("footer").style.visibility = "hidden";
			console.log("click")
		  }



		  // Video speed
		  document.querySelector('video').playbackRate = 0.5;



		//Sound
		$(function(){
		var howler_example = new Howl({
			src: ['../assets/images/audio.mp3'],
			volume: 0.5,
			
		});
		  
		  $("#howler-play").on("click", function(){
			howler_example.play();
		});
		$("#howler-pause").on("click", function(){
			howler_example.pause();
		});
	});