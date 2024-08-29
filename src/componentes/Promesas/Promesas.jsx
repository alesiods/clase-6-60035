import React from 'react'

//Programacion sincronica y asincronica

//La programacion sincronica se va ejecutar una tarea a la vez, en orden secuacial. Cada proceso es bloqueante del sigguinte

//La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial.

//Promesas: Un objeto que representa un evento futuro.
//En general este evento futuro es el resultado de alguna peticion asincronica.
//Las promesas tienen 3 estados: pendiente, cumplida o rechazada.



const Promesas = () => {

    //progrmacion sincronica:

    /* console.log("Tarea 1")
    console.log("Tarea 2") */

    //Programacion asincronica:

   /*  setTimeout(() => {
        console.log("tarea a")
    }, 3000);

    setTimeout(() => {
        console.log("tarea b")
    }, 1500); */


//Promesas:

    const  falsasPromesas = (estado) => {
        return new Promise((resolve, reject)=>{
            if(estado) {
                resolve("Promsa cumplida, mi llegó la play 5")
            } else {
                reject("Pormesa rechaza, me llegó carbon")
            }

        })
    }

    console.log(falsasPromesas(false))

    //THEN Y CATCH:

    //Podemos concatenar dos métodos que me permiten ejecutar una funcion cuando la promesa se cumple o se rechaza.
    //Then se ejecuta cuando la promesa se cumple
    //Catch se ejecuta cuando la promesa se rechaza.
    //Finally se ejecuta siempre.

    falsasPromesas(true)
        .then((respuesta)=>{
            console.log("Si si se cumplió!" + respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> console.log("Proceso terminado"))





  return (
    <div>Promesas</div>
  )
}

export default Promesas