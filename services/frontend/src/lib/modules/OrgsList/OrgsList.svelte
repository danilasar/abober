<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input"
    import { Label } from "$lib/components/ui/label"
    import CircleAlert from "lucide-svelte/icons/circle-alert";
    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import Copy from "lucide-svelte/icons/copy";
    import * as Alert from "$lib/components/ui/alert";
    import * as Select from "$lib/components/ui/select";
    export let orgs;
</script>
{#each orgs as org}
<Card.Root class="w-xl my-4">
    <Card.Header>
    <Card.Title>{org.data.name.short_with_opf}</Card.Title>
    <Card.Description>{org.data.name.full_with_opf}</Card.Description>
    </Card.Header>
    <Card.Content>
        <div class="grid w-full items-center gap-4">
        <div class="my-4">
            <Label for="name">ОГРН</Label>
            <div class="relative">
            <Input class="mt-1" disabled value={org.data.ogrn} />
            <button
                type="button"
                on:click={() => (console.log("huj"))}
                class="absolute right-2 top-[0.7rem]">
                    <Copy class="w-5 h-5 text-gray-500" />
            </button>
        </div>
        <div class="my-4">
            <Label for="name">Адрес</Label>
            <div class="relative">
            <Input class="mt-1" disabled value={org.data.address.value} />
            <button
                type="button"
                on:click={() => (console.log("huj"))}
                class="absolute right-2 top-[0.7rem]">
                    <Copy class="w-5 h-5 text-gray-500" />
            </button>
        </div>
        </div>
    </Card.Content>
    <Card.Footer class="flex justify-between">
    <Button href="/files/imek.docx">Скачать ИМЭК</Button>
    <Button href="/files/remd.docx">Скачать РЭМД</Button>
    </Card.Footer>
</Card.Root>
{/each}
