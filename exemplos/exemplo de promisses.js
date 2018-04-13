var x = 100

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(t => {
            x = 200
            // resolve(x)
            reject('deu ruim')
        }, 5000)
    })
}

// PRIMERA FORMA

// fn().then(
//     valor => {
//         console.log('primeira forma: ', x, valor)
//     },
//     motivo => {
//         console.log(motivo)
//     }
// )

// SEGUNDA FORMA

// fn()
//     .then(
//         valor => {
//             console.log('segunda forma: ', x, valor)
//             return fn()
//         })

//     .catch(
//         motivo => {
//             console.log(motivo)
//         }
//     )

// TERCEIRA FORMA

async function executa() {
    try {
        var valor = await fn()
        console.log('segunda forma: ', x, valor)
    } catch(e) {
        console.log('------ ', e)
    }
}

executa()

console.log('fora: ', x)