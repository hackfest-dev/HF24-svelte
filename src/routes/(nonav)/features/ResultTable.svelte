<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	export let formData;

	let response = [
		{
			Charge: 'Lorem',
			Percentage: 65.4
		},
		{
			Charge: 'Ipsum',
			Percentage: 34.3
		},
		{
			Charge: 'Chicksum',
			Percentage: 43.0
		},
		{
			Charge: 'Lorem',
			Percentage: 65.4
		},
		{
			Charge: 'Ipsum',
			Percentage: 34.3
		},
		{
			Charge: 'Chicksum',
			Percentage: 43.0
		},
		{
			Charge: 'Lorem',
			Percentage: 65.4
		},
		{
			Charge: 'Ipsum',
			Percentage: 34.3
		},
		{
			Charge: 'Chicksum',
			Percentage: 43.0
		},
		{
			Charge: 'Lorem',
			Percentage: 65.4
		},
		{
			Charge: 'Ipsum',
			Percentage: 34.3
		},
		{
			Charge: 'Chicksum',
			Percentage: 43.0
		}
	];
</script>

<!-- <p>{JSON.stringify(formData)}</p> -->
<!-- <p>{formData.data['values']['import-duty']}</p> -->
<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="text-center">Type</Table.Head>
			<Table.Head class="text-center">Percentage</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#if formData.data}
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Import Duty</Table.Cell>
				<Table.Cell class="py-0 text-center">{formData.data[0].values['import-duty']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Value Added Tax</Table.Cell>
				<Table.Cell class="py-0 text-center"
					>{formData.data[0].values['value-added-tax']}</Table.Cell
				>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Custom Clearance Fee</Table.Cell>
				<Table.Cell class="py-0 text-center"
					>{formData.data[0].values['custom-clearance-fee']}</Table.Cell
				>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Exercise Duties</Table.Cell>
				<Table.Cell class="py-0 text-center"
					>{formData.data[0].values['exercise-duties']}</Table.Cell
				>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Tariffs</Table.Cell>
				<Table.Cell class="py-0 text-center">{formData.data[0].values['tariffs']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Anti Dumping Duties</Table.Cell>
				<Table.Cell class="py-0 text-center"
					>{formData.data[0].values['anti-dumping-duties']}</Table.Cell
				>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Environmental Tax</Table.Cell>
				<Table.Cell class="py-0 text-center"
					>{formData.data[0].values['environmental-tax']}</Table.Cell
				>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0 text-center font-medium">Documentation</Table.Cell>
				<Table.Cell class="py-0 text-center">{formData.data[0].values['documentation']}</Table.Cell>
			</Table.Row>
		{:else}
			{#each response as item}
				<Table.Row>
					<Table.Cell class="py-0 text-center font-medium">{item['Charge']}</Table.Cell>
					<Table.Cell class="py-0 text-center">{item['Percentage']}</Table.Cell>
				</Table.Row>
			{/each}
		{/if}
	</Table.Body>
</Table.Root>
