<!--
 * @FileDescription: 许可版权声明模板
 * @Author: Stapxs
 * @Date: 2024/04/22
 * @Version: 1.0
-->

<template>
    <div class="ss-card info">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <span id="deptLink">{{ $t('dept_info') }}</span>
    </div>
    <div class="dept">
        <div class="ss-card jump-card" @click="openLink('https://github.com/Stapxs/Border-Card-UI/tree/js-bcui')">
            <header><div></div>Border Card UI<span>bcui.js</span></header>
            <div>Apache 2.0</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
        <div class="ss-card jump-card" @click="openLink('http://fontawesome.com')">
            <header><div></div>Font Awesome</header>
            <div>SIL OFL 1.1</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
        <div class="ss-card jump-card" @click="openLink('https://github.com/koishijs/QFace')">
            <header><div></div>QFace</header>
            <div>MIT</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
        <div class="ss-card jump-card" @click="openLink('https://lbs.amap.com/api/javascript-api/summary')">
            <header><div></div>aMap<span>高德地图</span></header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { openLink } from '@/function/utils/appUtil'

export default defineComponent({
    name: 'DepPan',
    data() {
        return {
            openLink: openLink
        }
    }
})
</script>

<style>
.info > svg {
    fill: var(--color-font);
    margin-right: 10px;
    height: 1.6rem;
}

.dept {
    padding-top: 0 !important;
    flex-direction: column;
    margin: 10px -20px 0 -20px;
    display: flex;
    max-height: 24vh;
    overflow-y: scroll;
    padding-right: 15px;
}
.info {
    min-height: unset;
    display: flex;
    padding: 20px;
}
.info,
.dept > div {
    background: var(--color-card-1);
}
.dept > div > header {
    color: var(--color-font);
}
.dept > div > header > span {
    font-size: 0.7rem;
    color: var(--color-font-2);
    margin-left: 10px;

}
.dept > div > div {
    background: var(--color-main);
    padding: 4px 10px 3px 10px;
    color: var(--color-font-r);
    border-radius: 2rem;
    margin-right: 10px;
    font-size: 0.7rem;
}
.dept > div:not(:first-child) {
    margin-top: 10px;
}
</style>
