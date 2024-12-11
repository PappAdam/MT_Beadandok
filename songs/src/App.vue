<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import artists from "./assets/artists.json";
import songs from "./assets/songs.json";

const genres = songs
    .filter(
        (value, index, array) =>
            array.findIndex((s) => s.GENRE == value.GENRE) === index
    )
    .map((s) => s.GENRE)
    .sort();

const artistSearch = ref("");
const songSearch = ref("");
const selectedGenre = ref("");

const filteredSongs = computed(() => {
    return songs.filter((song) => {
        const artistMatches = artistSearch.value
            ? artists.some(
                  (artist) =>
                      artist._id === song.ARTIST_ID &&
                      artist.artist
                          .toLowerCase()
                          .includes(artistSearch.value.toLowerCase())
              )
            : true;
        const songMatches = songSearch.value
            ? song.TITLE.toLowerCase().includes(songSearch.value.toLowerCase())
            : true;
        const genreMatches = selectedGenre.value
            ? song.GENRE === selectedGenre.value
            : true;
        return artistMatches && songMatches && genreMatches;
    });
});
</script>

<template>
    <Header></Header>

    <div class="filters">
        <input
            type="text"
            placeholder="Search by artist"
            v-model="artistSearch" />
        <input
            type="text"
            placeholder="Search by song title"
            v-model="songSearch" />
        <select v-model="selectedGenre">
            <option value="">All Genres</option>
            <option v-for="genre in genres" :key="genre" :value="genre">
                {{ genre }}
            </option>
        </select>
    </div>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="song in filteredSongs" :key="song._id">
                <td>{{ song.TITLE }}</td>
                <td>
                    {{
                        artists.find((artist) => artist._id === song.ARTIST_ID)
                            ?.artist
                    }}
                </td>
                <td>{{ song.GENRE }}</td>
                <td>{{ song.YEAR }}</td>
                <td>{{ song.TIME }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.filters {
    display: flex;
    gap: 10px;
}

input[type="text"],
select {
    padding: 8px;
    border: 1px solid var(--light-green);
    border-radius: 5px;
    background-color: var(--dark);
    font-size: 14px;
    color: var(--white);
}

select {
    background-color: var(--bg);
    color: var(--white);
}

table {
    width: 80%;
    border-collapse: collapse;
    background-color: var(--bg);
    border: 2px solid var(--light-green);
    display: block;
    border-radius: 10px;
    color: var(--white);
}

th,
td {
    padding: 10px;
    text-align: left;
    width: 100%;
}
th {
    background-color: var(--dark);
    color: var(--light-green);
}

tbody tr:nth-child(odd) {
    background-color: var(--bg);
}
tbody tr:nth-child(even) {
    background-color: var(--dark);
}

th:first-of-type {
    border-top-left-radius: 10px;
}
th:last-of-type {
    border-top-right-radius: 10px;
}
tr:last-of-type td:first-of-type {
    border-bottom-left-radius: 10px;
}
tr:last-of-type td:last-of-type {
    border-bottom-right-radius: 10px;
}
</style>
