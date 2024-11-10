<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Eye, EyeOff } from 'lucide-svelte';
  import type { FormState, FormErrors } from './types';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
  } from '$lib/components/ui/dropdown-menu';
  import { goto } from '$app/navigation';

  let formState: FormState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  };

  let showPassword = false;
  let showConfirmPassword = false;
  let errors: FormErrors = {};

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasDigit && hasLetter;
  };

  const handleSubmit: (arg0: SubmitEvent) => void = (event: SubmitEvent) => {
    event.preventDefault();
    errors = {};

    if (!formState.name) {
      errors.name = 'Имя обязательно';
    }

    if (!formState.surname) {
      errors.surname = 'Фамилия обязательна';
    }

    if (!formState.email) {
      errors.email = 'Электронная почта обязательна';
    } else if (!validateEmail(formState.email)) {
      errors.email = 'Введите корректный адрес электронной почты';
    }

    if (!formState.password) {
      errors.password = 'Пароль обязателен';
    } else if (!validatePassword(formState.password)) {
      errors.password = 'Пароль должен содержать хотя бы одну цифру и букву';
    }

    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
    }

    if (Object.keys(errors).length > 0) {
      return;
    }

    // TODO: Отправка данных на сервер (заглушка)
    console.log('Отправка данных на сервер:', formState);
    goto("/")
  };
</script>

<div class="flex flex-col space-y-2 text-center">
  <h1 class="text-2xl font-semibold tracking-tight">Регистрация</h1>
  <p class="text-muted-foreground text-sm">
    Для создания аккаунта представьтесь, введите почту и придумайте пароль
  </p>
</div>

<div
  class="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md"
  style="width:350px">
  <form on:submit={handleSubmit}>
    <div class="mb-4">
      <Label for="name">Имя</Label>
      <Input
        type="text"
        id="name"
        bind:value={formState.name}
        placeholder="Имя"
        class="mt-1" />
      {#if errors.name}
        <p class="text-red-500 text-sm">{errors.name}</p>
      {/if}
    </div>

    <div class="mb-4">
      <Label for="surname">Фамилия</Label>
      <Input
        type="text"
        id="surname"
        bind:value={formState.surname}
        placeholder="Фамилия"
        class="mt-1" />
      {#if errors.surname}
        <p class="text-red-500 text-sm">{errors.surname}</p>
      {/if}
    </div>

    <div class="mb-4">
      <Label for="email">Электронная почта</Label>
      <Input
        type="text"
        id="email"
        bind:value={formState.email}
        placeholder="Электронная почта"
        class="mt-1" />
      {#if errors.email}
        <p class="text-red-500 text-sm">{errors.email}</p>
      {/if}
    </div>

    <div class="mb-4 relative">
      <Label for="password">Пароль</Label>
      <Input
        type={showPassword ? 'text' : 'password'}
        id="password"
        bind:value={formState.password}
        placeholder="Введите пароль"
        class="mt-1" />
      {#if errors.password}
        <p class="text-red-500 text-sm">{errors.password}</p>
      {/if}
      <button
        type="button"
        on:click={() => (showPassword = !showPassword)}
        class="absolute right-2 top-10">
        {#if showPassword}
          <Eye class="w-5 h-5 text-gray-500" />
        {:else}
          <EyeOff class="w-5 h-5 text-gray-500" />
        {/if}
      </button>
    </div>

    <div class="mb-4 relative">
      <Label for="confirmPassword">Повторите пароль</Label>
      <Input
        type={showConfirmPassword ? 'text' : 'password'}
        id="confirmPassword"
        bind:value={formState.confirmPassword}
        placeholder="Повторите пароль"
        class="mt-1" />
      {#if errors.confirmPassword}
        <p class="text-red-500 text-sm">{errors.confirmPassword}</p>
      {/if}
      <button
        type="button"
        on:click={() => (showConfirmPassword = !showConfirmPassword)}
        class="absolute right-2 top-10">
        {#if showConfirmPassword}
          <Eye class="w-5 h-5 text-gray-500" />
        {:else}
          <EyeOff class="w-5 h-5 text-gray-500" />
        {/if}
      </button>
    </div>

    <Button
      type="submit"
      variant="default"
      class="w-full py-2 mt-4">
      Зарегистрироваться
    </Button>
  </form>

  <p class="mt-4 text-center text-sm">
    Уже есть аккаунт?
    <a
      href="/auth/login"
      class="text-blue-600 hover:underline">Войти</a>
  </p>
</div>
