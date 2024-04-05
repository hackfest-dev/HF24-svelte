<script>

	import Map from "$lib/components/map/Map.svelte";
    import {PUBLIC_API_KEY} from "$env/static/public"

</script>
<div class="border-2 border-black h-[calc(100vh-3.5rem)] flex flex-col px-16 py-6 gap-6">

    <!-- User input row -->
    <div class="flex justify-between w-full px-8">

        <!-- Source -->
        <div class="flex flex-col ">
            <h2 class="text-center">Source</h2>
            <input type="text" name="" id="" class="border border-gray-500">
        </div>

        <!-- Desination -->
        <div class="flex flex-col">
            <h2 class="text-center">Source</h2>
            <input type="text" name="" id="" class="border border-gray-500">
        </div>

        <!-- Product -->
        <div class="flex flex-col">
            <h2 class="text-center">Source</h2>
            <input type="text" name="" id="" class="border border-gray-500">
        </div>
    </div>
    
    <!-- Maps and Results Sections -->
    <div class="h-full flex gap-4">

        <!-- The map -->
        <Map class="h-full w-2/3 rounded-lg overfl" apiKey={PUBLIC_API_KEY} ></Map>
        
        <!-- Right side results and stats section -->
        <div class="w-1/3 flex flex-col gap-4">
            <div class="bg-white border-2 shadow-xl w-full h-2/3 rounded-lg"></div>
            <div class="bg-white border-2 shadow-xl w-full h-1/3 rounded-lg"></div>
        </div>
    
    </div>

</div>