<script>
  import { FeedbackStore } from "../store";

  $: count = $FeedbackStore.length;
  $: average = (
    $FeedbackStore.reduce((acc, { rating }) => acc + rating, 0) / count
  ).toFixed(1);
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  {#if average > 0}
    <h4>Ratings Average: {average}</h4>
  {/if}
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
