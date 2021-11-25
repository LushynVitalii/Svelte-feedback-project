import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Probably the best coffe place in Montreal. Super friendly staff! Offers takeout coffee with pre-order during the pandemic, as well as pastry items and other things.",
  },
  {
    id: 2,
    rating: 9,
    text: "I had a great time eating delicios snacks.",
  },
  {
    id: 3,
    rating: 8,
    text: "I really like the atmosphere, good coffee, and nice interior. ",
  },
]);
