<script setup>

import {useRoute,useRouter,RouterView} from "vue-router"
import cars from "../data/cars.json"


const route=useRoute()
const router = useRouter()

const carId =parseInt(route.params.id)

const car =cars.find(c => c.id === carId)
    
const showContact = () =>{
    if (carId === 4) return;
    return router.push(`/cars/${carId}/contact`)

}



</script>

<template>
    <div v-if="car">
        <h1>Car Viewee</h1>
        {{ car.name }}
        {{ car.year }}
        {{ car.price }}
        <button @click="showContact"> click for contact</button>

        <router-view></router-view>
    </div>
    <div v-else>
        <h1> Car not Found</h1>

    </div>
</template>