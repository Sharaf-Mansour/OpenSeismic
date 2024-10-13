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
<img src={form.src}>
{/if}