<template>
    <div>
        
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{{profile}}!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
        <h1>{{profile}}/{{id.myid}}'s Profile Page</h1>
    </div>
</template>


<script>
import {useRoute} from 'vue-router'
export default {
  name: 'Profile',
  data(){
      return {
          profile:'',
          id:{'myid':258456896},
      }
  },
  mounted(){
      let route=useRoute();
      this.profile = route.params.name;
      console.warn(this.profile);
  }
}
</script>