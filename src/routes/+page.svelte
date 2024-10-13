<script>
    import { enhance } from '$app/forms';
    const {form} = $props();
     
</script>

<form use:enhance class="p-3" action="?/getImage" method="POST">
    <div class="mb-3">
        <label for="startdate" class="form-label">Start Date:</label>
        <input type="date" id="startdate" name="startdate" class="form-control" />
    </div>

    <div class="mb-3">
        <label for="enddate" class="form-label">End Date:</label>
        <input type="date" id="enddate" name="enddate" class="form-control" />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
{#if form} 

{#each form.list as image}
<h1>1</h1>
    <img src={image.predPic} alt="Seismic Image" class="img-fluid mb-3" />
    <br>
    <img src={image.boxPic} alt="Seismic Image" class="img-fluid mb-3" />
{/each}

{/if}