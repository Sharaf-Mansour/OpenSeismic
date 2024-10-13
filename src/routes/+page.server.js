export const actions = {

    getImage: async ({ cookies, request }) => {
        const { startdate, enddate } = Object.fromEntries(await request.formData());

        return { src: "favicon.png" };
    },
}