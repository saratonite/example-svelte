<script>
  import { page } from "$app/stores"
  import { css } from "$styled-system/css"
</script>


<div class={css({ textAlign:"center"})}>

  <h1 class={css({
    fontSize:"6xl",
    color:"blue.400"
  })}>Some error : {$page.error?.message} 🧐</h1>
  <p>Code : {$page.status}</p>

</div>