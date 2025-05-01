export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "monthly",
    name: "Monthly",
    description:
      "Standard monthly membership. Try buying this with the test credit card 4242424242424242.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RDiXiIMUCSg0j0skDWw4IBg",
    stripe_product_id: "prod_S7yURRJSZJHP9d",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    description:
      "Yearly at a 50% discount. Try buying this with the test credit card 4242424242424242.",
    price: "$30",
    priceIntervalName: "per year",
    stripe_price_id: "price_1RDiabIMUCSg0j0sJ8ciAdWC",
    stripe_product_id: "prod_S7yURRJSZJHP9d",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
