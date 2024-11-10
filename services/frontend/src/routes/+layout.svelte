<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import '../app.css';
  import Navbar from '$lib/modules/Navbar/Navbar.svelte';
  import type { NavLink } from '$lib/modules/Navbar/types';
  let { children } = $props();

  const navlinks: NavLink[] = [
    {
      title: 'Главная',
      url: '/',
    },
    {
      title: 'О нас',
      url: '/about',
    },
  ];
</script>

<ModeWatcher />
<Navbar {navlinks} isAuth={false} />
{@render children()}
