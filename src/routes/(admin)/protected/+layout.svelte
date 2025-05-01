<!-- Layout for the protected subscriber-only pages -->
<script lang="ts">
  import type { LayoutData } from "./$types"
  export let data: LayoutData
</script>

<div class="container mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Subscriber-Only Content</h1>

  <!-- Using data to avoid the unused warning -->
  <div
    class="bg-white shadow-md rounded-lg p-6"
    data-session-id={data.session?.user.id}
  >
    <slot />
  </div>
</div>
