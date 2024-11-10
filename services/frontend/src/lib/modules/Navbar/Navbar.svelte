<script lang="ts">
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { ChevronLeft, ChevronRight, Hospital } from 'lucide-svelte';
  import type { NavLink } from './types';

  export let navlinks: NavLink[];

  let isNavToggled = false;

  const toggleNav = () => {
    isNavToggled = !isNavToggled;
  };

  export let isAuth; // TODO: check if auth?
</script>

<nav
  class="flex flex-row justify-between items-center sticky top-0 z-20 py-2 px-8 bg-white shadow-md dark:bg-zinc-900">
  <a
    href="/"
    class="flex flex-row items-center text-xl font-bold"
    ><Hospital />
    <span class="w-full hidden sm:inline">&nbsp;&nbsp;ЖивТех:&nbsp;Медицина</span>
  </a>
  <div class="flex flex-row items-center flex-nowrap">
    <ul
      class={`flex flex-row flex-wrap items-center gap-4 list-none p-4 w-[calc(100%-2rem)] md:w-auto md:p-0 fixed top-20 z-10 rounded-lg shadow-md bg-white dark:bg-zinc-900 md:bg-none md:shadow-none md:rounded-none md:relative md:top-0 ${isNavToggled ? '-translate-x-0 left-4 right-4 opacity-100' : '-left-full opacity-0'} transition-all md:translate-x-full opacity-100`}>
      {#each navlinks as navlink}
        <li>
          <a href={navlink.url}>
            <Button variant="ghost">
              {navlink.title}
            </Button>
          </a>
        </li>
      {/each}
      <li>
        {#if isAuth}
          <a href="/profile">
            <Button variant="ghost">Профиль</Button>
          </a>
        {:else}
          <a href="/auth/login">
            <Button variant="ghost">Вход</Button>
          </a>
          <a href="/auth/register">
            <Button variant="ghost">Регистрация</Button>
          </a>
        {/if}
      </li>
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
    <Button
      variant="outline"
      size="icon"
      class="md:hidden"
      on:click={toggleNav}>
      {#if isNavToggled}
        <ChevronLeft />
      {:else}
        <ChevronRight />
      {/if}
    </Button>
  </div>
</nav>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
