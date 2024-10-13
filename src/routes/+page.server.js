 const getTrace = async (startDate, endDate) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Sharaf-Mansour/OpenSeismic/refs/heads/main/static/Metadata.csv'); // Replace with your CSV file URL
        const csvText = await response.text();
        const results = csvText.split('\n').map(row => row.split(',')); // Parse CSV data into an array
        const filteredIndices = [];
        results.forEach((row, index) => {
            const rowDate = new Date(row[10]); // Adjust index based on the structure of your CSV
            if (rowDate >= startDate && rowDate <= endDate) {
                filteredIndices.push(index); // Add the index to the results
            }
        });
        
        return filteredIndices; // Return filtered indices
    } catch (error) {
        throw new Error('Failed to fetch data: ' + error.message);
    }
}

export const actions = {

    getImage: async ({ request }) => {
        const { startdate, enddate } = Object.fromEntries(await request.formData());
        const startDate = new Date(startdate);
        const endDate = new Date(enddate);

        const traceIndices =  await  getTrace(startDate, endDate);
 
        const imageUrls = traceIndices.map(index => ({      
            predPic: `/anno/${index}.jpg`,
            boxPic: `/box/${index}.png`
        }));
        return { list: imageUrls };
    },
};


