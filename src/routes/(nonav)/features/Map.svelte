<script lang="ts">
	import * as Maps from '@googlemaps/js-api-loader';
	import { type LoaderOptions } from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';
	import mapStyles from './map-styles';
	export let apiKey: string;
	export let loaderOptions: Omit<LoaderOptions, 'apiKey'> | null = null;
	export let mapOptions: google.maps.MapOptions | null = null;
	export let data: {} = {};

	let pathCoordinatesArray: { lat: number; lng: number }[][] = [[]];

	$: pathCoordinatesArray = data?.pathCoordinatesArray ?? [[]];
	// $: console.log('Path Coordinates', pathCoordinates);

	const { Loader } = Maps;

	let loader: Maps.Loader;

	let map: google.maps.Map;
	let container: HTMLElement;

	let mounted = false;

	async function renderMap() {
		loader.importLibrary('maps').then(() => {
			map = new google.maps.Map(container, {
				center: { lat: 23.37, lng: 82.5 },
				zoom: 0,
				minZoom: 2,
				gestureHandling: 'greedy',
				streetViewControl: false,
				styles: mapStyles,
				...mapOptions
			});

			pathCoordinatesArray.forEach((pathCoordinates: { lat: number; lng: number }[], index) => {
				if (pathCoordinates != null) {
					var createPath = async (pathCoordinates: { lat: number; lng: number }[]) => {
						const flightPath = new google.maps.Polyline({
							path: pathCoordinates,
							geodesic: true,
							strokeColor: index===0?'#000000':'#FF0000',
							strokeOpacity: index===0?0.2:1.0,
							strokeWeight: index===0? 8:2
						});

						flightPath.setMap(map);
					};
					createPath(pathCoordinates);

					new google.maps.Marker({
						position: pathCoordinates[0],
						map,
					})
					new google.maps.Marker({
						position: pathCoordinates[pathCoordinates.length-1],
						map,
					})
				}
			});
		});
	}

	$: {
		mounted && pathCoordinatesArray && renderMap();
	}

	onMount(() => {
		mounted = true;
		loader = new Loader({
			version: 'quarterly',
			...loaderOptions,
			apiKey
		});

		renderMap();
	});
</script>

<div bind:this={container} id="map" {...$$restProps} />
