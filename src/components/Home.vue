<template>
 

    <div class="content-wrapper">
      <div class="container">

        <div class="row" data-aos="fade-up">
          <div class="col-xl-8 stretch-card grid-margin" v-for="i in top" v-bind:key="i.id">
            <router-link v-bind:to="`/post/${i.url}`">
            <div class="position-relative">
              
              <img v-bind:src="`https://news.coder-i.com${i.cover_img}`" class="img-fluid">

              <!--<iframe width="690" height="415" src="https://www.youtube.com/embed/eFDZOoVB2Ek"
               title="YouTube video player" frameborder="0" allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>-->

              <div class="banner-content">
                <div class="badge badge-danger fs-12 font-weight-bold mb-3">
                  global news
                </div>
                <h1 class="mb-0">{{i.title}}</h1>
                
                <div class="fs-12">
                  <span class="mr-2">Photo </span>10 Minutes ago
                </div>
              </div>
            </div>
            </router-link>
          </div>

          <div class="col-xl-4 stretch-card grid-margin">
            <div class="card bg-dark text-white">
              <div class="card-body">
                <h2>Recent</h2>

                <div class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                  v-for="i in side" v-bind:key="i.id">
                  
                  <div class="pr-3">
                    <h5><router-link v-bind:to="`/post/${i.url}`">{{i.title.substring(0,20)}}</router-link></h5>
                    <div class="fs-12">
                      <span class="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                  <div class="rotate-img">
                    <img v-bind:src="`https://news.coder-i.com${i.cover_img}`" class="img-fluid">
                  </div>
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-3 stretch-card grid-margin">
            <div class="card">
              <div class="card-body">
                <h2>Category</h2>
                <ul class="vertical-menu">
                  <li v-for="i in cat" v-bind:key="i.id">
                  <router-link v-bind:to="`/category/${i.under_by}/${i.name}`">{{i.name}}</router-link>
                  
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 stretch-card grid-margin">
            <div class="card">
              <div class="card-body">
                <div class="row" v-for="i in body3" v-bind:key="i.id">
                  
                  <div class="col-sm-4 grid-margin">
                    <div class="position-relative">
                      <div class="rotate-img">
                        <router-link v-bind:to="`/post/${i.url}`">
                        <img v-bind:src="`https://news.coder-i.com${i.cover_img}`" class="img-fluid">
                        </router-link>
                      </div>
                      <div class="badge-positioned">
                        <span class="badge badge-danger font-weight-bold">Flash news</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8  grid-margin">
                    <h2 class="mb-2 font-weight-600">
                     <router-link v-bind:to="`/post/${i.url}`"> {{i.title}}</router-link>
                    </h2>
                    <div class="fs-13 mb-2">
                      <span class="mr-2">Photo </span>10 Minutes ago
                    </div>
                    <p class="mb-0" v-html="i.content.substring(0,200)">
                      
                    </p>
                  </div>
                  
                </div>

               
              </div>
            </div>
          </div>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-sm-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="card-title">
                      Video
                    </div>
                    <div class="row">
                      <div class="col-sm-6 grid-margin">
                        <div class="position-relative">
                          <div class="rotate-img">
                            
                            <iframe class="img-fluid" src="https://www.youtube.com/embed/FUQheX3PSnY"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                          </div>
                          <div class="badge-positioned w-90">
                            
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 grid-margin">
                        <div class="position-relative">
                          <div class="rotate-img">
                            
                            <iframe class="img-fluid" src="https://www.youtube.com/embed/10uVS5pmm-g"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                          </div>
                          <div class="badge-positioned w-90">
                            
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 grid-margin">
                        <div class="position-relative">
                          <div class="rotate-img">
                            
                            <iframe class="img-fluid" src="https://www.youtube.com/embed/mIxlvVlOIS0"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                          </div>
                          <div class="badge-positioned w-90">
                            
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6 grid-margin">
                        <div class="position-relative">
                          <div class="rotate-img">
                            
                            <iframe class="img-fluid" src="https://www.youtube.com/embed/pk5otCRuCaI"
                             title="YouTube video player" frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                          </div>
                          <div class="badge-positioned w-90">
                            
                          </div>
                        </div>
                      </div>

              
                    </div>
                    
                  </div>

                  <div class="col-lg-4">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="card-title">
                        Popular News
                      </div>
                     
                    </div>
                    <div class="d-flex justify-content-between align-items-center border-bottom pb-2"
                      v-for="i in popular" v-bind:key="i.id">
                      <div class="div-w-80 mr-3">
                        <div class="rotate-img">
                          <router-link v-bind:to="`/post/${i.url}`"> 
                          
                          <img v-bind:src="`https://news.coder-i.com${i.cover_img}`" class="img-fluid">
                          </router-link>
                        </div>
                      </div>
                      <h3 class="font-weight-600 mb-0">
                        <router-link v-bind:to="`/post/${i.url}`"> 
                        
                        {{i.title.substring(0,50)}}
                        </router-link>
                      </h3>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>

</template>


<script>
  import axios from 'axios'
  export default {
    name: 'Home',
    data(){
      return {
        top:null,
        side:null,
        cat:null,
        body3:null,
        popular:null,

      }
    },

    mounted(){
      axios.get('https://news.coder-i.com/newsapi/news/?tag=top1')
        .then(response => {this.top = response.data})
      
      axios.get('https://news.coder-i.com/newsapi/category/?sub_title=all')
        .then(response => {this.cat = response.data})

      axios.get('https://news.coder-i.com/newsapi/news/?tag=top2')
        .then(response => {this.side = response.data})  
      
      axios.get('https://news.coder-i.com/newsapi/news/?tag=top3')
        .then(response => {this.body3 = response.data}) 
      
      axios.get('https://news.coder-i.com/newsapi/news/?tag=popular')
        .then(response => {this.popular = response.data})
       
    },

    methods(){
      
    }
  }
</script>