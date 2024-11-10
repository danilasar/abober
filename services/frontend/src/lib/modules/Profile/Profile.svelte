<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import type { FormState, ProfileProps } from './types';
  import type { FormErrors } from '../RegiterForm/types';
  import { Eye, EyeOff } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  export let userProfile: ProfileProps;

  let formState: FormState = {
    name: userProfile.name,
    surname: userProfile.surname,
    email: userProfile.email,
    password: userProfile.password,
    confirmPassword: userProfile.password,
  };

  let showPassword = false;
  let showConfirmPassword = false;
  let isChangesDetected = false;
  let errors: FormErrors = {};

  const handleFormChange = () => {
    isChangesDetected =
      userProfile.name !== formState.name ||
      userProfile.surname !== formState.surname ||
      userProfile.email !== formState.email ||
      userProfile.password !== formState.password ||
      userProfile.name !== formState.name;
  };

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
  };
</script>

<div class="max-w-screen-lg mx-auto mt-8 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
  <h1 class="text-3xl font-bold text-center my-8 w-full">Мой профиль</h1>

  <div class="container flex flex-col lg:flex-row mt-8 gap-8">
    <img
      src="/images/avatar.webp"
      alt={`${userProfile.id}'s avatar'`}
      class="rounded-lg h-96 aspect-square object-cover" />
    <form
      on:submit={handleSubmit}
      class="flex flex-col w-full">
      <div class="mb-4">
        <Label for="name">Имя</Label>
        <Input
          on:change={handleFormChange}
          type="text"
          id="name"
          autocomplete="off"
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
          on:change={handleFormChange}
          type="text"
          id="surname"
          autocomplete="off"
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
          on:change={handleFormChange}
          type="text"
          id="email"
          autocomplete="off"
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
          on:change={handleFormChange}
          type={showPassword ? 'text' : 'password'}
          id="password"
          autocomplete="off"
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
          on:change={handleFormChange}
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          autocomplete="off"
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
        disabled={!isChangesDetected}
        class="w-full py-2 mt-4">
        Сохранить изменения
      </Button>
    </form>
  </div>
</div>
