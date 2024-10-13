import fs from 'fs';
import csv from 'csv-parser';
 
// const getTrace = (startDate, endDate) => {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let rowCount = 0;
//         fs.createReadStream('static\\Metadata.csv')
//             .pipe(csv())
//             .on('data', (data) => {
//             rowCount++;
//             const time = new Date(data.time);          
//             if (time >= new Date(startDate) && time <= new Date(endDate)) {
//                 results.push(data);
//             }
//             })
//             .on('end', () => {
//             const traceIndices = results.map(result => result.index);
//             console.log(`Total rows: ${rowCount}`);
//             console.log(traceIndices);
//             resolve(traceIndices);
//             })
//             .on('error', (error) => {
//             reject(error);
//             });
//     });
// };

async function getTrace(startDate, endDate) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('Metadata.csv')
            .pipe(csv())
            .on('data', (data) => {
                results.push(data); // Collect all rows in results
            })
            .on('end', () => {
                const filteredIndices = [];
                results.forEach((row, index) => {
                    const rowDate = new Date(row.time); 
                    if (rowDate >= startDate && rowDate <= endDate) {
                        filteredIndices.push(index); // Add the index to the results
                    }
                });
                 resolve(filteredIndices);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
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

 

        console.log(imageUrls);
        return { list: imageUrls };
    },
};


