<template>
    <el-container style="height:    100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header />
            </el-header>

            <common-tag />

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>



<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/Commontag.vue'
export default {
    name: 'Vue-Home',
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.el-header {
    background-color: black;
}

.el-main {
    padding-top: 0;
}

.el-container {
    height: 100vh;
}
</style>