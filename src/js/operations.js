
export function index(coders, tbody) {

    tbody.innerHTML = ""

    for (const coder of coders) {
        tbody.innerHTML += `
        <tr>
            <td scope="row">${coder.id}</td>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
        </tr>
        `
    };
}
