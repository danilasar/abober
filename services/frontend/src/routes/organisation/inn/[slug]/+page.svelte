<script lang="ts">
    import ChevronLeft from "lucide-svelte/icons/chevron-left"
    import NoInnSection from "$lib/modules/NoInnSection/NoInnSection.svelte"
    import OrgsList from "$lib/modules/OrgsList/OrgsList.svelte"
    import { Button } from "$lib/components/ui/button"

    import { onMount } from "svelte";

    import getOrganisations from "$api/get-orgs-by-inn.ts"

    export let data;

    let orgs = [];
    let error = false;

    const getOrgs = async () => {
        orgs = await getOrganisations(data.slug)
        console.log(orgs)
        error = orgs === "error"
    }

    onMount(getOrgs)
</script>

{#if error}
<NoInnSection />
{:else}
<section class="mt-16 max-w-screen-lg mx-auto">
    <h2 class="text-4xl mb-4">
        <Button href="/" variant="outline" size="icon">
            <ChevronLeft />
        </Button>
        Поиск по ИНН
    </h2>
    <OrgsList orgs={orgs} />
</section>
{/if}