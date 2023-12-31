// подключаем модуль для работы с папками/файлами проекта
const fs = require('fs')

/* запускаем асинхронную функцию - считывание файла, как только полностью считаем файл - 
*  сработает коллбэк функция (err, data) => {...} и в этой колбэк функции начнем вписывать в файл данные
*  @data - считанная информация
*/  
let res = fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + '\nSome text', (err, data) => {
        console.log('Все сработало!')
    })
})

console.log(res)

