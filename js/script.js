const containerIcons = document.querySelector('.container-icons')
const eleSelect = document.getElementById('type')


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


switch (eleSelect.value) {
    case 'all':
        arrIcons.forEach((ele, i) => {
            const eleIcon = document.createElement('div');
            eleIcon.classList.add('icon');
            eleIcon.classList.add('rounded-3');
            eleIcon.classList.add('shadow');
            eleIcon.style.color=`${arrIcons[i].color}`
            containerIcons.append(eleIcon);
            eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}"></i><p class="text-uppercase">${arrIcons[i].name}</p>`;
        
        })
      break;
    case 'animal':
        arrIcons.forEach((ele, i) => {
            const eleIcon = document.createElement('div');
            eleIcon.classList.add('icon');
            eleIcon.classList.add('rounded-3');
            eleIcon.classList.add('shadow');
            eleIcon.style.color=`${arrIcons[i].color}`
            containerIcons.append(eleIcon);
            eleIcon.innerHTML += `<i class="fs-3  ${arrIcons[i].prefix}${arrIcons[i].name}">`;
        
        })
      break;
    case 'vegetable':
        arrIcons.forEach((ele, i) => {
            const eleIcon = document.createElement('div');
            eleIcon.classList.add('icon');
            eleIcon.classList.add('rounded-3');
            eleIcon.classList.add('shadow');
            eleIcon.style.color=`${arrIcons[i].color}`
            containerIcons.append(eleIcon);
            eleIcon.innerHTML += `<i class="fs-3 ${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name}">`;
        
        })
      break;
    case 'user':
      day = "Wednesday";
      break;
}