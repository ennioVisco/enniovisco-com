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
const {data: dblp, pending} = await useLazyFetch<DBLP>('https://dblp.org/search/publ/api?q=author%3AEnnio_Visconti%3A&format=json', 
{ pick: ['result'] })

const papers = computed(() => dblp.value?.result.hits.hit)
</script>

<template>
    <ul class="papers">
        <template v-if="!pending">
            <li v-for="paper in papers" :key="paper.info.url" class="item">
                <a :href="paper.info.url" class="link">
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
        </template>
        <template v-else>
            <li class="placeholder" v-for="i in 6" :key="i">
                <div class="animated-background" :data-line="i"></div>
            </li>
        </template>
    </ul>
</template>

<style scoped lang="scss">


@mixin animated($i) {
    .animated-background[data-line="#{$i}"] {
        animation-name: placeHolderShimmer#{$i};
    }
    @keyframes placeHolderShimmer#{$i}{
        $offset: 50% * $i;
        0%{
            background-position: calc(-150% + $offset) 0
        }
        100%{
            background-position: calc(700% + $offset) 0
        }
    }
}

@for $i from 1 through 6 {
    @include animated($i);
}

.placeholder {
    background-color: #eee;
    height: 3rem;
    margin-block: 0.75rem;
}

.animated-background {
    animation-duration: 0.75s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    position: relative;
}



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
}

.link {
    display: block;
    padding-inline: 0.5rem;
    padding-block: 0.75rem;
}

.link:focus, .link:hover {
    outline: 1px dotted black;
    background-color: #fff70033;
}

@media (prefers-color-scheme: dark) {
    .link:hover, .link:focus {
        outline: 1px dotted white;  
        background-color: #fff70067;
    }
}

.authors em {
    font-style: normal;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
}
</style>