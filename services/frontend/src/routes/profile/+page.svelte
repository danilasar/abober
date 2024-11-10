<script>
  import Profile from '$lib/modules/Profile/Profile.svelte';

  let userProfile = {
    id: 1,
    name: 'Роберт',
    surname: 'Толстов',
    email: 'tolstovrob@gmail.com',
    password: '123qwerty',
  };
</script>

<Profile {userProfile} />
