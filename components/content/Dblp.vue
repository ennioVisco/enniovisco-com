<script setup lang="ts">
type DBLP = {
    result: {
        hits: {hit: [{
            info: {
            title: string,
            url: string,
            venue: string,
            authors: { author: [{ text: string }] },
            year: number
            }
        }]}
    }
}
const {data: dblp} = await useFetch<DBLP>('https://dblp.org/search/publ/api?q=author%3AEnnio_Visconti%3A&format=json', 
{ pick: ['result'] })

const papers = computed(() => dblp.value?.result.hits.hit)
</script>

<template>
    <ul class="papers">
        <li v-for="paper in papers" :key="paper.info.url" class="link">
            <a :href="paper.info.url">
                <Icon name="mdi:link-variant" />
                <strong>{{ paper.info.title }}</strong>&nbsp;
                <span>{{  paper.info.venue }}'{{ paper.info.year }}</span>
                <ol class="authors">
                    <li v-for="author in paper.info.authors.author">
                        <em v-if="author.text === 'Ennio Visconti'">
                            {{ author.text }}
                        </em>
                        <template v-else>{{ author.text }}</template>
                    </li>
                </ol>
            </a>
        </li>
    </ul>
</template>

<style scoped>
.authors {
    display: flex;
    flex-direction: row;
    /* gap: 1rem; */
}

.authors > li:not(:last-child)::after {
    content: ',\00a0';
}

.papers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.link:hover, .link:focus {
    background-color: #fff70033;
    /* outline: 1px solid gold; */
}

.link:hover > a, .link:focus > a {
    text-decoration: underline dotted;
}

.authors em {
    font-style: normal;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
}
</style>