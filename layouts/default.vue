<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
<template>
    <div>
        <SpeedInsights />
        <!-- <OgImageScreenshot /> -->
        <slot />
    </div>
</template>