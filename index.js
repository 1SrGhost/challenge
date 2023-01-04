function createCube(size) {
 // /\_\
 // \/_/

 //dimension del cubo
//inicia con la cantidad de espacios del tamano del cubo

//debe retornar un arreglo
  let result = [];

  // Primera mitad del cubo
  for (let i = 0; i < size; i++) {
    let line = '';
    line += ' '.repeat(size-i-1);
    line += '/\\'.repeat(i+1);
    line += '_\\'.repeat(size);
    result.push(line);
}

  // Segunda mitad del cubo
  for (let i = 0; i < size; i++) {
    let line = '';
    line += ' '.repeat(i);
    line += '\\/'.repeat(size-i);
    line += '_/'.repeat(size);
    result.push(line);
}

  return result.join('\n');
}


console.log(createCube(1))
console.log(createCube(2))
console.log(createCube(3))
console.log(createCube(4))
console.log(createCube(5))

