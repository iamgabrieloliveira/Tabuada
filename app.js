function calcular(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let n = Number(num.value)
    let c = 1 
    res.innerHTML = ''
    if (num.value.length == 0){
        window.alert('Por favor, Digite um número: ')
    }else{
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c ++
    }
}
}
