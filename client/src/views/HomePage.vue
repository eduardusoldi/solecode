<script>
import { useFlightStore } from '../stores/flight'
import { mapActions, mapState } from 'pinia'
import Card from '../components/Card.vue'
export default {
    components: {
        Card
    },
    methods: {
        ...mapActions(useFlightStore, ['fetchFlight', 'filterFilght']),
        sortingFlight(order) {
            this.fetchFlight(order)
        },
        filterFlight(filter) {
            this.filterFilght(filter)
        }
    },
    computed: {
        ...mapState(useFlightStore, ['airlinesData', 'airportData', 'flightScheduleData'])
    },
}
</script>

<template>
    <div class="d-flex justify-content-center fs-1 mt-5 pt-5 border-bottom">
        <div class="mb-3">
            Flight Schedule
        </div>
    </div>
    <div class="dropdown d-flex justify-content-center pt-4 gap-3">
        <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Name
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button class="dropdown-item" @click.prevent="filterFlight(`QZ`)">Air Asia Indonesia</button></li>
            <li><button class="dropdown-item" @click.prevent="filterFlight(`GA`)">Garuda Indonesia</button></li>
            <li><button class="dropdown-item" @click.prevent="filterFlight(`SQ`)">Singapore Airlines</button></li>
            <li><button class="dropdown-item" @click.prevent="filterFlight(`All`)">All</button></li>
        </ul>
        <div class="dropdown">
            <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter by Time
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" @click.prevent="filterFilght(`morning`)">06:00 - 12:00</button></li>
                <li><button class="dropdown-item" @click.prevent="filterFilght(`afternoon`)">12:00 - 18:00</button></li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Sort by Name
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" @click.prevent="sortingFlight(`ascName`)">Ascending</button></li>
                <li><button class="dropdown-item" @click.prevent="sortingFlight(`descName`)">Descending</button></li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                Sort by Time
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" @click.prevent="sortingFlight(`ascTime`)">Ascending</button></li>
                <li><button class="dropdown-item" @click.prevent="sortingFlight(`descTime`)">Descending</button></li>
            </ul>
        </div>
    </div>
    <div class="row row-cols-3 pt-5 pb-5 ps-4 grid gap-4 d-flex justify-content-center">
        <Card v-for="card in flightScheduleData" :card="card" />
    </div>
</template>