<script setup lang="ts"></script>

<template>
    <header class="curved">
        <div>
            <h1>Songs</h1>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

div h1 {
    font-size: 100px;
    color: var(--light-green);
    margin-bottom: 10px;
}

div h2 {
    color: var(--cyan);
}

.curved {
    position: relative;
    background: var(--dark);
    border-bottom-left-radius: 50% 8%;
    border-bottom-right-radius: 50% 8%;
    min-height: 30vh;
}

.button {
    height: 40px;
    width: 100px;
    background-color: var(--bg);
    color: var(--cyan);
    border: 1px solid var(--cyan);
    border-radius: 3px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.button:hover {
    border: 1px solid var(--light-green);
    color: var(--light-green);
    box-shadow: 0px 0px 10px var(--bg);
}
</style>
