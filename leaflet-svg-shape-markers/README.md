# leaflet-svg-shape-markers
Additional SVG marker types for leaflet.js such as triangle, diamond and square. Check out the [demo](http://rowanwins.github.io/Leaflet.SvgShapeMarkers/example/).

### Installing
Either  downloading this repo or install from npm 
````
npm install leaflet-svg-shape-markers
````

### Usage
**Step 1.** Include the required js in your document 

````
	<script src="leaflet-svg-shape-markers/dist/leaflet-svg-shape-markers.min.js"></script>
	// or 
	require('leaflet-svg-shape-markers')
````

**Step 2.** Add a point to your map using the `shapeMarker` function

````
var square = L.shapeMarker([51.505, -0.09], {
	shape: 'square',
	radius: 20
}).addTo(map);
````

**Step 3.**
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| shape | string | "triangle" | A valid shape, one of "triangle" or "square" or "diamond" or "x"|
| radius | number | 20 | The size of the svg marker in pixels |

L.shapeMarker also extends the [path class](http://leafletjs.com/reference.html#path) so any options that you can pass (such as color or fillOpacity) are also valid.

````
var diamond = L.shapeMarker([51.505, -0.09], {
	fillColor: "#cccccc",
	color: "black",
	shape: "diamond",
	radius: 200
}).addTo(map);
````

### Available shapes

* `diamond`
* `square`
* `triangle` (an alias for `triangle-up`)
* `triangle-up`
* `triangle-down`
* `circle`
* `x`

### Additional methods
| Method        | Returns      | Description  | 
| ------------- |--------------|--------------|
| toGeoJSON | Object | Returns a GeoJSON representation of the marker (as a GeoJSON Point Feature).|
| setLatLng | this | Sets the position of a marker to a new location.|
| getLatLng | LatLng | Returns the current geographical position of the marker.|
| setStyle | this | Changes the appearance of a Path based on the options in the Path options object.|
| getRadius | this | Returns the current radius of the marker.|
| setRadius | this | Sets the radius of a marker. Units are in pixels.|

````
diamond.setRadius(10);
````

### Acknowledgements
Huge hats off go to [mourner](https://github.com/mourner) and all the [contributors](https://github.com/Leaflet/Leaflet/graphs/contributors) to the leaflet.js project, it's an amazing piece of open source software!
