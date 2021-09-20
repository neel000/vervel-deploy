<template>
    <div class="content-wrapper">
        <div class="container">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-3 stretch-card grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h2>{{subtitle}}</h2>
                            <ul class="vertical-menu">
                                <li v-for="i in content" v-bind:key="i.id">
                                    <a v-bind:href="`/category/${subtitle}/${i.name}`">{{i.name}}</a>
                                    <!--<router-link class="nav-link" v-bind:to="`/category/${i.name}`">{{i.name}}</router-link>-->
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="col-lg-9 stretch-card grid-margin">
                    <div class="card">
                        <div class="card-body">

                            <div class="row"  v-for="i in post" v-bind:key="i.id">
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
                                        <router-link v-bind:to="`/post/${i.url}`"> 
                                        {{i.title}}
                                        </router-link>
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
        </div>
    </div>
</template>    
    <script>
        import { useRoute } from 'vue-router'
        import axios from 'axios'
        export default {
            name: 'Category',
            data() {
                return {
                    subtitle: '',
                    content:null,
                    post:null,
                }

            },
            mounted() {
                let route = useRoute()
                this.subtitle = route.params.name
                let contentname = (route.params.content)
                
                axios.get('https://news.coder-i.com/newsapi/category/?sub_title='+this.subtitle)
                .then(response => {this.content= response.data})
                   console.log(this.subtitle);


                if (contentname=='all'){
                    axios.get('https://news.coder-i.com/newsapi/content/?sub_title='+this.subtitle)
                    .then(response => {this.post= response.data})
                }
                else{

                    axios.get('https://news.coder-i.com/newsapi/content/?sub_title='+this.subtitle+'&content_title='+route.params.content)
                    .then(response => {this.post= response.data})

                }


            }
        }
    </script>