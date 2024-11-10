<script lang="ts">
  import { OTPInput, OTPRoot } from '@jimmyverburgt/svelte-input-otp';
  import Minus from 'lucide-svelte/icons/minus';
  import Dot from 'lucide-svelte/icons/dot';
  import Search from 'lucide-svelte/icons/search';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';
  import { Button } from '$lib/components/ui/button';
  import CircleAlert from 'lucide-svelte/icons/circle-alert';
  import * as Alert from '$lib/components/ui/alert/index.js';
  import { goto } from '$app/navigation';
  import { Label } from '$lib/components/ui/label';
  import { Input } from '$lib/components/ui/input';

  let otpref: any;

  // Set start value
  let value = '';
  let name = '';
  let errorINN = false;
  let errorName = false;

  const checkInn: boolean = (inn: string) => {
    if (!(!isNaN(inn) && inn.length == 10 && Number(inn) > 0)) {
      return false;
    }
    return true;
    //return ((2 * inn[0] + 4 * inn[1] + 10 * inn[2] + 3 * inn[3] + 5 * inn[4] + 9 * inn[5] + 4 * inn[6] + 6 * inn[7] + 8 * inn[8]) % 11) % 10 == inn[0]
  };

  function handleOtpComplete(otp: string) {
    errorINN = !checkInn(otp);
  }

  function handleOtpChange(event: { detail: string }) {
    console.log('OTP changed:', value);
  }

  const loadOrganisationByINN = () => {
    errorINN = !checkInn(value);
    if (errorINN) {
      return;
    }
    goto('organisation/inn/' + value);
  };
  const loadOrganisationByName = (event: Event) => {
    event.preventDefault();
    errorName = name === '';
    if (errorName) {
      return;
    }
    goto(`organisation/name/${name}`);
  };
</script>

<section class="main-section">
  <Tabs.Root value="inn">
    <Tabs.List>
      <Tabs.Trigger value="name">По названию</Tabs.Trigger>
      <Tabs.Trigger value="inn">По ИНН</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="inn">
      <Card>
        <CardHeader>
          <CardTitle class="text-4xl">Поиск по ИНН</CardTitle>
          <CardDescription
            >Чтобы получить информацию об организации, введите её ИНН в поле ниже:</CardDescription>
        </CardHeader>
        <CardContent>
          {#if errorINN}
            <Alert.Root
              variant="destructive"
              class="mb-8 transition-all">
              <CircleAlert class="h-4 w-4" />
              <Alert.Title>Ошибка</Alert.Title>
              <Alert.Description
                >Это не похоже на ИНН. Проверьте его правильность.</Alert.Description>
            </Alert.Root>
          {/if}
          <OTPRoot
            bind:this={otpref}
            maxLength={10}
            on:change={handleOtpChange}
            bind:value
            autoFocus={true}
            onComplete={handleOtpComplete}
            className="flex flex-wrap items-center gap-2"
            inputMode="numeric"
            ariaLabel="Svelte OTP Code">
            <div class="flex items-center">
              <OTPInput
                index={0}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={1}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={2}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={3}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
            </div>
            <div class="mx-1">
              <Dot />
            </div>
            <div class="flex items-center">
              <OTPInput
                index={4}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={5}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={6}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={7}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
              <OTPInput
                index={8}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
            </div>
            <div class="mx-1">
              <Dot />
            </div>
            <div class="flex items-center">
              <OTPInput
                index={9}
                className="input-number relative flex items-center justify-center border-y border-r border-input text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                focusClassName="z-10 ring-2 ring-ring ring-offset-background" />
            </div>
          </OTPRoot>
        </CardContent>
        <CardFooter class="flex justify-end">
          <Button
            class="flex flex-row items-center"
            on:click={loadOrganisationByINN}><Search class="mr-2 h-4 w-4" />&nbsp;Найти</Button>
        </CardFooter>
      </Card>
    </Tabs.Content>
    <Tabs.Content value="name">
      <form on:submit={loadOrganisationByName}>
        <Card>
          <CardHeader>
            <CardTitle class="text-4xl">Поиск по названию организации</CardTitle>
            <CardDescription
              >Чтобы получить информацию об организации, введите её название в поле ниже:</CardDescription>
          </CardHeader>
          <CardContent>
            {#if errorName}
              <Alert.Root
                variant="destructive"
                class="mb-8 transition-all">
                <CircleAlert class="h-4 w-4" />
                <Alert.Title>Ошибка</Alert.Title>
                <Alert.Description>Пустое название организации.</Alert.Description>
              </Alert.Root>
            {/if}

            <div class="mb-4">
              <Label for="name">Название организации</Label>
              <Input
                type="text"
                id="name"
                bind:value={name}
                placeholder="Название организации"
                class="mt-1" />
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button
              type="submit"
              class="flex flex-row items-center"><Search class="mr-2 h-4 w-4" />&nbsp;Найти</Button>
          </CardFooter>
        </Card>
      </form>
    </Tabs.Content>
  </Tabs.Root>
</section>

<pre>{name}</pre>

<style>
  .main-section {
    height: calc(100vh - 56px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  :global(.input-number) {
    width: 3rem;
    height: 4rem;
  }
</style>
