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

			const colors = [
				'#000000',
				'#e11d48',
				'#2563eb',
				'#16a34a',
				'#f97316',
				'#FF00FF',
				'#C0C0C0',
				'#808080',
				'#800000',
				'#808000',
				'#008000',
				'#800080',
				'#008080',
				'#000080',
				'#FFA07A',
				'#20B2AA',
				'#FF6347',
				'#FF4500',
				'#FFD700',
				'#FF8C00',
				'#FF69B4',
				'#FF1493'
			];

			pathCoordinatesArray.forEach((pathCoordinates: { lat: number; lng: number }[], index) => {
				if (pathCoordinates != null) {
					var createPath = async (pathCoordinates: { lat: number; lng: number }[]) => {
						const flightPath = new google.maps.Polyline({
							path: pathCoordinates,
							geodesic: true,
							strokeColor: colors[index],
							strokeOpacity: index === 0 ? 0.4 : 1.0,
							strokeWeight: index === 0 ? 8 : 3
						});

						flightPath.setMap(map);
					};
					createPath(pathCoordinates);
				}
			});

			if (pathCoordinatesArray.length > 0) {
				new google.maps.Marker({
					position: pathCoordinatesArray[0][0],
					map
				});

				new google.maps.Marker({
					position: pathCoordinatesArray[0][1],
					map
				});
			}
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
