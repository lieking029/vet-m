<template>
  <div  >
    <navbar />
      <div >
        <child />
      </div> 
  </div>
</template> 
<script>
import Navbar from '../Components/Nav.vue'; 
export default {
  middleware: "auth",
  name: "MainLayout", 
  components: {
    Navbar,
  },
};
</script>
