<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	export let data: any;
</script>

<!-- <p>{JSON.stringify(data)}</p> -->

{#if data.length >= 1}
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Type</Table.Head>
				<Table.Head>Percentage</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Import Duty</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['import-duty']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Value Added Tax</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['value-added-tax']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Custom Clearance Fee</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['custom-clearance-fee']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Exercise Duties</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['exercise-duties']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Tariffs</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['tariffs']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Anti Dumping Duties</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['anti-dumping-duties']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Environmental Tax</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['environmental-tax']}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="py-0  font-medium">Documentation</Table.Cell>
				<Table.Cell class="py-0 ">{data[0].values['documentation']}</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
{/if}
