<script>
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Eye, EyeOff } from 'lucide-svelte';
  let { children } = $props();
</script>

<div
  class="auth-container container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
  <div
    class="left-section bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
    <div
      class="stock-photo absolute inset-0 bg-cover"
      style="
				background-image:
					url(/images/auth_light.jpg);" />
    <div class="relative z-20 flex items-center text-lg font-medium">
      <!-- <Command class="mr-2 h-6 w-6" /> -->
      ЖивТех: Медицина
    </div>
    <div class="relative z-20 mt-auto">
      <blockquote class="space-y-2">
        <p class="quote-shadow text-lg">
          Все, что имеется в мудрости, все это есть и в медицине, а именно: презрение к деньгам,
          совестливость, скромность, простота в одежде, уважение, решительность, опрятность,
          изобилие мыслей, знание всего того, что полезно и необходимо для жизни, отвращение к
          пороку, отрицание суеверного страха перед богами, божественное превосходство.
        </p>
        <footer class="text-sm quote-shadow quote-author">&mdash; Гиппократ</footer>
      </blockquote>
    </div>
  </div>
  <div class="lg:p-8">
    <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      {@render children()}
      <p class="text-muted-foreground px-8 text-center text-sm">
        Авторизуясь, вы принимаете
        <a
          href="/terms"
          class="hover:text-primary underline underline-offset-4">
          условия использования
        </a>
        и
        <a
          href="/privacy"
          class="hover:text-primary underline underline-offset-4">
          политику приватности
        </a>
        .
      </p>
    </div>
  </div>
</div>

<style>
  .auth-container {
    height: calc(100vh - 56px);
  }
  .left-section {
    background: black;
  }
  .stock-photo {
    opacity: 0.6;
  }
  .quote-shadow {
    text-shadow:
      1px 1px 4px #000,
      1px 1px 10px #000;
  }
  .quote-author {
    font-style: italic;
  }
</style>
