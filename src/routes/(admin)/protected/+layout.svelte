<!-- svelte-ignore export_let_unused -->
<!-- Layout for the protected subscriber-only pages -->
<script lang="ts">
  import type { LayoutData } from "./$types"

  // We're using the data in the slot, so we need to export it
  export let data: LayoutData
</script>

<div class="container mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Subscriber-Only Content</h1>

  <div class="bg-white shadow-md rounded-lg p-6">
    <slot />
  </div>
</div>
