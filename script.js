const arrivees = [
    { heure: "08:45", vol: "AF1234", provenance: "Paris-CDG" },
    { heure: "11:20", vol: "EZ4567", provenance: "Londres-Stansted" },
];

const departs = [
    { heure: "09:30", vol: "AF1235", destination: "Paris-CDG" },
    { heure: "13:00", vol: "EZ4568", destination: "Londres-Stansted" },
];

window.onload = () => {
    const arriveesList = document.querySelector('#arrivees ul');
    const departsList = document.querySelector('#departures ul');

    arrivees.forEach(vol => {
        const li = document.createElement('li');
        li.textContent = `${vol.heure} - ${vol.vol} - en provenance de ${vol.provenance}`;
        arriveesList.appendChild(li);
    });

    departs.forEach(vol => {
        const li = document.createElement('li');
        li.textContent = `${vol.heure} - ${vol.vol} - destination ${vol.destination}`;
        departsList.appendChild(li);
    });
};
