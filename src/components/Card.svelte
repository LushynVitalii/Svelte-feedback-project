<div class="card">
  <slot />
</div>

<style>
  .card {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
  }
  @media only screen and (max-width: 800px) {
    .card {
      padding: 38px 10px;
    }
  }
</style>
