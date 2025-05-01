<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData

  // Get subscription details from the layout
  const { subscription } = data
  const plan = subscription.appSubscription
</script>

<div class="subscription-info">
  <h2 class="text-xl font-semibold mb-4">Thank you for subscribing!</h2>

  <div class="bg-gray-50 p-4 rounded-lg mb-6">
    <p class="mb-2">
      Your subscription type is: <span class="font-bold text-blue-600"
        >{plan.name}</span
      >
    </p>

    <div class="mt-4">
      <h3 class="text-lg font-medium mb-2">Subscription Details:</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>Plan: {plan.name}</li>
        <li>Price: {plan.price}/month</li>
        {#if plan.features}
          <li>
            Features:
            <ul class="list-disc pl-5 mt-1">
              {#each plan.features as feature}
                <li>{feature}</li>
              {/each}
            </ul>
          </li>
        {/if}
      </ul>
    </div>
  </div>

  <p>This content is only visible to subscribers. Thanks for your support!</p>
</div>
