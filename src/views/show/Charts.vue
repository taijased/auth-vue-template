<template lang="pug">
    .charts
        el-container(v-if="getChartsOptions")
            el-header(v-if="getSick")
                img.press(src="../../assets/back.svg", @click="$router.go(-1)")
                .name {{getSick.first_name + " " + getSick.last_name}}
                img(v-if="getSick.gender", src="../../assets/male.svg")
                img(v-else, src="../../assets/female.svg")
            el-main(v-if="getCharts")
                div(v-for="(item, index) in getCharts", :key="item.name + 'key-' + index")
                    h1 График: {{index + ' ' + item.name}}
                    #chart
                        apexchart(type="area", height="350", :options="getChartsOptions", :series="item.data" )
            
    </div>
            
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
    computed: {
        ...mapGetters({
            getSick: "sick/getSick",
            getChartsOptions: "charts/getChartsOptions",
            getSeriesNegative: "charts/getSeriesNegative",
            getCharts: "charts/getCharts"
        }),
    },
    methods: {
        ...mapActions({
            fetchGraph: "charts/fetchGraph"
        })
    },
    created() {
        this.$nextTick(() => { 
            if (this.getSick) {
                this.fetchGraph(this.getSick.id)
            } else {
                this.$router.push('/main')
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.charts
    width 100vw
    background: #E6F1F3;
    .el-container
        overflow-y auto
        .el-header
            height 15vh !important
            background #5DB1B5
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            padding 0 8%
            img
                width 90px
            .name
                font-family 'RobotoBold'
                font-style: normal;
                font-weight: bold;
                font-size: 4.5vw;
                line-height: normal;
                color: white;
.press
    transform scale(1)
    transition transform .25s
    user-select none
    &:active 
        transform scale(0.9)
        transition transform .25s
    
</style>
