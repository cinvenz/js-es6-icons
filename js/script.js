const containerIcons = document.querySelector('.container-icons')
const eleSelect = document.getElementById('filter1')


const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

eleSelect.innerHTML += `<option value="animal">animal</option><option value="vegetable">vegetable</option><option value="user">user</option>`
arrIcons.forEach((ele, i) => {
    const eleIcon = document.createElement('div');
    eleIcon.classList.add('icon');
    eleIcon.classList.add('rounded-3');
    eleIcon.classList.add('shadow');
    eleIcon.style.color=`${arrIcons[i].color}`
    containerIcons.append(eleIcon);
    eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}"></i><p class="text-uppercase">${arrIcons[i].name}</p>`;

})

function filter1(value) {
    switch (value) {
        case 'animal':
            for (let i = 1; i < 8; i++) {
                const eleIcon = document.createElement('div');
                eleIcon.classList.add('icon');
                eleIcon.classList.add('rounded-3');
                eleIcon.classList.add('shadow');
                eleIcon.style.color=`${arrIcons[i].color}`
                containerIcons.append(eleIcon);
                eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}"></i><p class="text-uppercase">${arrIcons[i].name}</p>`;
            
            }
        break;
        case 'vegetable':
            for (let i = 8; i < 12; i++) {
                const eleIcon = document.createElement('div');
                eleIcon.classList.add('icon');
                eleIcon.classList.add('rounded-3');
                eleIcon.classList.add('shadow');
                eleIcon.style.color=`${arrIcons[i].color}`
                containerIcons.append(eleIcon);
                eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}"></i><p class="text-uppercase">${arrIcons[i].name}</p>`;
            
            }
        break;
        case 'user':
            for (let i = 12; i < 16; i++) {
                const eleIcon = document.createElement('div');
                eleIcon.classList.add('icon');
                eleIcon.classList.add('rounded-3');
                eleIcon.classList.add('shadow');
                eleIcon.style.color=`${arrIcons[i].color}`
                containerIcons.append(eleIcon);
                eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}"></i><p class="text-uppercase">${arrIcons[i].name}</p>`;
            
            }
        break;
    }
}
