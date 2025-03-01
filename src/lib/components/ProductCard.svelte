<script>
  export let title;
  export let color;
  export let image;
</script>

<div class="card {title.toLowerCase().replace(' ', '-')}">
  <div class="header">NUVOLARIS</div>
  <h3>{title}</h3>
  <img src={image} alt={title + " Icon"} />
  <button class="learn-more">LEARN MORE</button>
</div>

<style>
</style>
