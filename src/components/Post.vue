<template>
    <div class="content-wrapper">
        <div class="container">
            <div class="col-sm-12">
                <div class="card" data-aos="fade-up">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <div v-for="i in post" v-bind:key="i.id">
                                    <h1 class="font-weight-600 mb-1">
                                        {{i.title}}
                                    </h1>
                                    <p class="fs-13 text-muted mb-0">
                                        <span class="mr-2">Photo </span>10 Minutes ago
                                    </p>
                                    <div class="rotate-img">
                                        <img v-bind:src="`https://news.coder-i.com${i.cover_img}`" class="img-fluid">
                                    </div>
                                    <p class="mb-4 fs-15" v-html="i.content">
                                        
                                    </p>
                                </div>
                                
                                <div class="d-lg-flex">
                                    <span class="fs-16 font-weight-600 mr-2 mb-1">Tags</span>
                                    <span class="badge badge-outline-dark mr-2 mb-1">Trending</span>
                                    <span class="badge badge-outline-dark mr-2 mb-1">Trending</span><span
                                        class="badge badge-outline-dark mr-2 mb-1">Trending</span><span
                                        class="badge badge-outline-dark mr-2 mb-1">Trending</span><span
                                        class="badge badge-outline-dark mb-1">Trending</span>
                                </div>
                                <div class="post-comment-section">
                                    <h3 class="font-weight-600">Related Posts</h3>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="post-author">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/inner/inner_5.jpg" alt="banner"
                                                        class="img-fluid" />
                                                </div>
                                                <div class="post-author-content">
                                                    <h5 class="mb-1">
                                                        Virus Kills Member Of Council Advising Iran’s
                                                        Supreme Leader
                                                    </h5>
                                                    <p class="fs-13 text-muted mb-0">
                                                        <span class="mr-2">Photo </span>10 Minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="post-author">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/inner/inner_6.jpg" alt="banner"
                                                        class="img-fluid" />
                                                </div>
                                                <div class="post-author-content">
                                                    <h5 class="mb-1">
                                                        Virus Kills Member Of Council Advising Iran’s
                                                        Supreme Leader
                                                    </h5>
                                                    <p class="fs-13 text-muted mb-0">
                                                        <span class="mr-2">Photo </span>10 Minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--<div class="testimonial">
                                        <div class="d-lg-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/faces/face1.jpg" alt="banner"
                                                        class="img-fluid img-rounded mr-3" />
                                                </div>
                                                <div>
                                                    <p class="fs-12 mb-1 line-height-xs">
                                                        Of the Author
                                                    </p>
                                                    <p class="fs-16 font-weight-600 mb-0 line-height-xs">
                                                        Nout Golstein
                                                    </p>
                                                </div>
                                            </div>
                                            <ul class="social-media mb-3">
                                                <li>
                                                    <a href="#">
                                                        <i class="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="mdi mdi-youtube"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="fs-12">
                                            Praesent facilisis vulputate venenatis. In facilisis
                                            placerat arcu, in tempor neque aliquet quis. Integer
                                            lacinia in ligula eu sodales. Proin non lorem
                                            iaculis, dictum lorem quis, bibendum leo.
                                        </p>
                                    </div>
                                    <div class="comment-section">
                                        <h5 class="font-weight-600">Comments</h5>
                                        <div class="comment-box">
                                            <div class="d-flex align-items-center">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/faces/face2.jpg" alt="banner"
                                                        class="img-fluid img-rounded mr-3" />
                                                </div>
                                                <div>
                                                    <p class="fs-12 mb-1 line-height-xs">
                                                        24 Jul 2020
                                                    </p>
                                                    <p class="fs-16 font-weight-600 mb-0 line-height-xs">
                                                        Chigusa Kisa
                                                    </p>
                                                </div>
                                            </div>

                                            <p class="fs-12 mt-3">
                                                Praesent facilisis vulputate venenatis. In
                                                facilisis placerat arcu, in tempor neque aliquet
                                                quis. Integer lacinia in ligula eu sodales. Proin
                                                non lorem iaculis, dictum lorem quis, bibendum
                                                leo.
                                            </p>
                                        </div>
                                        <div class="comment-box from">
                                            <div class="d-flex align-items-center">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/faces/face3.jpg" alt="banner"
                                                        class="img-fluid img-rounded mr-3" />
                                                </div>
                                                <div>
                                                    <p class="fs-12 mb-1 line-height-xs">
                                                        24 Jul 2020
                                                    </p>
                                                    <p class="fs-16 font-weight-600 mb-0 line-height-xs">
                                                        Mohsen Salehi
                                                    </p>
                                                </div>
                                            </div>

                                            <p class="fs-12 mt-3">
                                                Praesent facilisis vulputate venenatis. In
                                                facilisis placerat arcu, in tempor neque aliquet
                                                quis. Integer lacinia in ligula eu sodales. Proin
                                                non lorem iaculis, dictum lorem quis, bibendum
                                                leo.
                                            </p>
                                        </div>
                                        <div class="comment-box mb-0">
                                            <div class="d-flex align-items-center">
                                                <div class="rotate-img">
                                                    <img src="/layout/images/faces/face3.jpg" alt="banner"
                                                        class="img-fluid img-rounded mr-3" />
                                                </div>
                                                <div>
                                                    <p class="fs-12 mb-1 line-height-xs">
                                                        24 Jul 2020
                                                    </p>
                                                    <p class="fs-16 font-weight-600 mb-0 line-height-xs">
                                                        Lucy Miller
                                                    </p>
                                                </div>
                                            </div>

                                            <p class="fs-12 mt-3">
                                                Praesent facilisis vulputate venenatis. In
                                                facilisis placerat arcu, in tempor neque aliquet
                                                quis. Integer lacinia in ligula eu sodales. Proin
                                                non lorem iaculis, dictum lorem quis, bibendum
                                                leo.
                                            </p>
                                        </div>
                                    </div>-->
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
        
        name: 'Post',
        data(){
            return{
                post:null,
            }
        },
        mounted(){
            let route = useRoute()
            axios.get('https://news.coder-i.com/newsapi/post/?tag='+route.params.url)
                .then(response => {this.post= response.data})
        }

        //https://news.coder-i.com/newsapi/post/?tag=

    }
</script>