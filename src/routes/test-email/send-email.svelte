<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm, type FormPath } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug from 'sveltekit-superforms';
	import { browser } from '$app/environment';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, isTainted } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="from">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">From:</Form.Label>
				<Input {...attrs} bind:value={$formData.from} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="to">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">To:</Form.Label>
				<Input {...attrs} bind:value={$formData.to} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="cc">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">cc:</Form.Label>
				<Input {...attrs} bind:value={$formData.cc} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="bcc">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">bcc:</Form.Label>
				<Input {...attrs} bind:value={$formData.bcc} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="subject">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">subject:</Form.Label>
				<Input {...attrs} bind:value={$formData.subject} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="text">
		<Form.Control let:attrs>
			<div class="flex">
				<Form.Label class="mt-4 w-20 font-semibold">text:</Form.Label>
				<Textarea {...attrs} placeholder="Type your message here." bind:value={$formData.text} />
			</div>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Send Email</Form.Button>
</form>

{#if browser}
	<div class="mt-8"></div>
	<SuperDebug data={$formData} />
{/if}
