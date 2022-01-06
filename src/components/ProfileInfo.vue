<template>
    <div></div>
</template>
<script>
import func from 'vue-editor-bridge'

export default {
    name: "ProfileInfo",
    data: function(){
        return {
            claims : []
        }
    },
    methods: {
        async setup(){
            if(this.$root.authenticated){
               this.claims = await this.$auth.getUser();
            }
        }
    }

}
</script>
