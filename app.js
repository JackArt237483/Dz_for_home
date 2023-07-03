fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const outputDiv = document.getElementById('output');

    function displayParents(personName, personData) {
      const personInfo = document.createElement('div');
      personInfo.innerHTML = `<h2>Name: ${personName}</h2><p>Age: ${personData.age}</p>`;
      outputDiv.appendChild(personInfo);

      if (personData.parents) {
        for (const parentName in personData.parents) {
          displayParents(parentName, personData.parents[parentName]);
        }
      }
    }

    for (const personName in data) {
      displayParents(personName, data[personName]);
    }
  })
  .catch(error => console.error('Error fetching data:', error));