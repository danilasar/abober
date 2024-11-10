<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import CircleAlert from "lucide-svelte/icons/circle-alert";
    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import * as Alert from "$lib/components/ui/alert";
</script>

<section class="error-section">
    <div class="alert">
        <Alert.Root variant="destructive">
            <CircleAlert class="h-4 w-4" />
            <Alert.Title>Ошибка</Alert.Title>
            <Alert.Description>Компании с таким ИНН не найдены.</Alert.Description>
        </Alert.Root>
        <Button class="mt-2" href="/"><ArrowLeft class="mr-2 h-4 w-4" />&nbsp;На главную</Button>
    </div>
</section>

<style>
    .error-section {
        height: calc(100vh - 56px);
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .alert {
        width: 80vw;
        margin: 4rem
    }
    @media screen and(max-width: 640px) {
        .alert {
            width: 100vw;
        }
    }

</style>