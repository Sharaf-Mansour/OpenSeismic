<script>
    import { enhance } from '$app/forms';
    const {form} = $props();
</script>

<div class="d-flex justify-content-center">
    <form use:enhance class="row p-3 w-75" action="?/getImage" method="POST">
        <div class="mb-3 col">
            <label for="startdate" class="form-label">Start Date:</label>
            <input type="date" id="startdate" name="startdate" class="form-control" />
        </div>

        <div class="mb-3 col">
            <label for="enddate" class="form-label">End Date:</label>
            <input type="date" id="enddate" name="enddate" class="form-control"  />
        </div>

        <button type="submit" class="btn btn-primary fs-1  col">Submit</button>
    </form>
</div>

{#if form} 
    <h1 class="text-center">Showing data between {new Date(form.startDate).toLocaleDateString('en-GB')} - {new Date(form.endDate).toLocaleDateString('en-GB')}</h1>
    <div class="d-flex justify-content-center flex-wrap ">
        {#each form.list as image}
            <div class="d-flex mb-3 row">
                <img src={image.predPic} alt="Seismic Image" class="img-fluid col-6" />
                <img src={image.boxPic} alt="Seismic Image" class="img-fluid col-6" />
            </div>
        {/each}
    </div>
{/if}