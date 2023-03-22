<script setup lang="ts">
type Commit = {
    commit: {
        author: {
            date: string
        }
    }
}
const { data: commits } = await useLazyFetch<Commit[]>('https://api.github.com/repos/ennioVisco/CV/commits')
const lastCommit = computed(() => {
    if(commits.value) {
        const date = new Date(commits.value[0].commit.author.date)
        return date.toLocaleDateString()
    } else {
        return 'Loading...'
    }
})
</script>

<template>
    <span class="update">Last updated: {{ lastCommit }}</span>
</template>

<style scoped>
.update {
    font-size: 0.8rem;
    font-style: italic;
    margin-inline: 0.5rem;
}
</style>