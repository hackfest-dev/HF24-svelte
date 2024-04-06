<script>
	import * as Table from '$lib/components/ui/table';

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
		},
	];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="text-center">Charges</Table.Head>
			<Table.Head class="text-center">Percentage</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each response as item}
			<Table.Row>
				<Table.Cell class="py-0 font-medium text-center">{item['Charge']}</Table.Cell>
				<Table.Cell class="text-center py-0">{item['Percentage']}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
