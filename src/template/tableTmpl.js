/**
 * Created by Олександр on 24.01.2017.
 */
"use strict";

const bikeRentalTable = (data) => {
    return `
        <table>
            <th>Company name</th>
            <th>Location</th>
                ${data.map(item => {
                    return `
                    <tr >
                        <td id="${item.id}">
                                ${item.company === null ? '' : item.company[0]}
                        </td>
                        <td id="location${item.id}">
                            Location will appear here.
                        </td>
                    </tr>
                    `}).join("")}
        </table>
    `;
};

export default bikeRentalTable;