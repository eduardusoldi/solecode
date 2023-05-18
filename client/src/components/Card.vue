<script>
import { mapState } from 'pinia';
import { useFlightStore } from '../stores/flight';
export default {
    props: ['card'],
    computed: {
        ...mapState(useFlightStore, ['airlinesData', 'airportData'])
    }
}
</script>
<template>
    <div class="card shadow mb-1 rounded" style="width: 40rem;">
        <div class="card-body flex justify-content-center">
            <div class="row gap-3">
                <div class="col-2"><img style="width: 80px;"
                        :src="airlinesData.airlines_data.filter(airline => airline.Code === card.airlines)[0].image"
                        :alt="`${card.airlines} Logo`" /></div>
                <div class="col-2 text-justify" style="margin-left: 50px;">
                    {{ card.departure_airport }}
                    <div class="" style="font-size: xx-large; width: 100px;">{{ card.departure_time.split('T')[1] }} </div>
                    <div style="font-size: 10px;">
                        {{ airportData.airport_data.filter(airport => airport.Code === card.departure_airport ? airport.Name
                            : null)[0].Name }}
                    </div>
                </div>
                <div class="col-2 text-justify pt-3" style="margin-left: 30px;">
                    <img style="width: 70px"
                        src="https://images.fineartamerica.com/images/artworkimages/medium/3/airplane-icon-vector-tim-hester-transparent.png" />
                </div>
                <div class="col-2 text-justify">
                    {{ card.arival_airport }}
                    <div class="" style="font-size: xx-large; width: 100px;">{{ card.arival_time.split('T')[1] }} </div>
                    <div style="font-size: 10px;">
                        {{ airportData.airport_data.filter(airport => airport.Code === card.arival_airport ? airport.Name :
                            null)[0].Name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>