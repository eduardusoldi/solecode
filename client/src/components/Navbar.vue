<script>
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="container-fluid">
            <div @click.prevent="$router.push('/')" id="logo" class="navbar fs-3 lh-base">
                <img
                style="width: 50px"
                src="https://i.fbcd.co/products/resized/resized-750-500/w004e-50-e03-mainpreview-bb16aa12ce0ac4b5200447e9a251d4a173c0e975403757d867205e3744c6fb27.jpg"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Company Name</router-link>
                    </li>   
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Flight Schedule</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Ubuntu:wght@300;500&display=swap');

html,
body {
    font-family: Ubuntu;
}
</style>