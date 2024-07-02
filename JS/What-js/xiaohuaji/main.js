
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const arrayName = ['怪兽威利','大老爹','圣诞老人'];
const arrayLocation = ['肯德基','迪士尼乐园','白宫'];
const arrayaction = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {
    let name = randomValueFromArray(arrayName);
    let location1 = randomValueFromArray(arrayLocation);
    let action = randomValueFromArray(arrayaction);
    let weight = Math.round(200) + " 公斤 ";
    let temperature = Math.round(40) + " 摄氏度";

  if(customName.value !== '') {
    let name = customName.value;
  }
  if(document.getElementById("american").checked) {
     weight = Math.round(300) + "华氏度";
     temperature = Math.round(94) +"磅";
  }

  story.textContent = `今天气温 ${weight} ，${name}出去遛弯。当走到${location1}门前时，突然就:${action}。
  人们都惊呆了，${customName.value}全程目睹但并没有慌，因为${name}是一个 ${temperature}的胖子，天气又辣么热。`;
  story.style.visibility = 'visible';
}