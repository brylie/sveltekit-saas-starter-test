import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"
import {
  getOrCreateCustomerId,
  fetchSubscription,
} from "../account/subscription_helpers.server"

export const load: LayoutServerLoad = async ({ locals }) => {
  // Check if user is authenticated
  if (!locals.session?.user) {
    throw redirect(303, "/login/sign_in")
  }

  const supabaseServiceRole = locals.supabaseServiceRole

  // Get customer ID
  const { customerId, error: customerIdError } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user: locals.session.user,
  })

  if (customerIdError) {
    console.error("Error getting customer ID:", customerIdError)
    throw redirect(303, "/login/sign_in")
  }

  if (!customerId) {
    throw redirect(303, "/account")
  }

  // Fetch subscription
  const { primarySubscription, error: subscriptionError } =
    await fetchSubscription({
      customerId,
    })

  if (subscriptionError) {
    console.error("Error fetching subscription:", subscriptionError)
    throw redirect(303, "/account")
  }

  // If no active subscription, redirect to pricing page
  if (!primarySubscription) {
    throw redirect(303, "/pricing")
  }

  // Return subscription data to the page
  return {
    subscription: primarySubscription,
    session: locals.session,
  }
}
