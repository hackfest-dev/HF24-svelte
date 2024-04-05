<script>

	import { Input } from "$lib/components/ui/input";

</script>
<div class=" h-[calc(100vh-3.5rem)] flex flex-col px-16 py-6 gap-6">

    <!-- User input row -->
    <div class="flex justify-between w-full px-8">

        <!-- Source -->
        <div class="flex flex-col gap-1">
            <h2 class="text-center text-xl font-semibold">Source</h2>
            <Input class="h-8 border-2 shadow-lg" placeholder="Choose Country" />
        </div>

        <!-- Desination -->
        <div class="flex flex-col gap-1">
            <h2 class="text-center text-xl font-semibold">Destination</h2>
            <Input class="h-8 border-2 shadow-lg" placeholder="Hey nigga..." />
        </div>

        <!-- Product -->
        <div class="flex flex-col gap-1">
            <h2 class="text-center text-xl font-semibold">Product HS Code</h2>
            <Input class="h-8 border-2 shadow-lg" placeholder="Hey nigga..." />
        </div>
    </div>
    
    <!-- Maps and Results Sections -->
    <div class=" h-full flex gap-4">

        <!-- The map -->
        <div class="bg-white border-2 shadow-xl h-full w-2/3 rounded-lg" ></div>
        
        <!-- Right side results and stats section -->
        <div class="w-1/3 flex flex-col gap-4">
            <div class="bg-white border-2 shadow-xl w-full h-2/3 rounded-lg"></div>
            <div class="bg-white border-2 shadow-xl w-full h-1/3 rounded-lg"></div>
        </div>
    
    </div>

</div>