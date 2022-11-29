<template>
<div class="bg-image" style="background-image: url('../static/computer.jpg'); 
background-repeat: no-repeat; background-size:100%" >

    <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);  
       height:100%; 
       width:100%;"> -->
       

        <nav class="navbar navbar-expand-lg py-2 sticky-top navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-logo-png-300x82.png" alt="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button  v-b-modal.modal-center class="btn btn-primary ms-lg-3">Join Us</button>
                    <b-modal id="modal-center" size="lg" hide-footer style="height:50px">
                        <LoginModal />
                      
                     </b-modal>
                </div>
            </div>
        </nav>
        <!-- HERO -->
        <div class="hero vh-100 d-flex align-items-center" id="home">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center">
                        <h1 class="display-4 text-white">Welcome to our 'NEWS' Website</h1>
                        <p class="text-white my-3">MATHY EXAMSDAILY PRIVATE LIMITED is your resource hub for Current Affairs, General Knowledge, Exam Notifications, Competitive Exam preparation, etc. We provide you with the latest notifications, study materials and results from the career industry.</p>
                        <a href="#" class="btn me-2 btn-primary">Get Started</a>
                        <a href="#" class="btn btn-outline-light">My Portfolio</a>
                    </div>
                </div>
            </div>
        </div><!-- //HERO -->
<!-- SERVICES -->
<section id="services">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
                 <h6 class="text-primary">SERVICES</h6>
                <h1>Our Services</h1>
                <p>ExamsDaily is Indias #1 Leading Web Design and Development Company, 
                    which provides all kind of services related to Website, App, Domain and Hosting.</p>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect bounceInUp">
                    <div class="iconbox">
                        <i class="bi bi-headset"></i>
                    </div>
                    <h5 class="mt-4 mb-2">24/7 Support</h5>
                    <p>We provide 24x7 support even after project closed.</p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class="bi bi-person-badge"></i>
                    </div>
                    <h5 class="mt-4 mb-2">Expert Work</h5>
                    <p>Get your project done under Experts as your wish</p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class="bi bi-pencil-square"></i>
                    </div>
                    <h5 class="mt-4 mb-2">Creative Design</h5>
                    <p>We make beautiful Creative Designs and mesmorising thoughts. </p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class="bi bi-code-slash"></i>
                    </div>
                    <h5 class="mt-4 mb-2">Web Design & Development</h5>
                    <p>We make beautiful website designs with quality of work. development skills too.

                        </p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class="bi bi-google-play"></i>
                    </div>
                    <h5 class="mt-4 mb-2">Mobile Apps Development</h5>
                    <p>We are developing Web, Android and IOS Apps.

                         </p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class="bi bi-globe-central-south-asia"></i>
                    </div>
                    <h5 class="mt-4 mb-2">Domain & Hosting</h5>
                    <p>We provides good quality of Domain and Hosting as well.

                        </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- SERVICES -->

<!---Features-->
<section class="row w-100 py-0 bg-light" id="features">
    <div class="col-lg-6 col-img"></div>
    <div class="col-lg-6 py-5 col-text">
        <div class="container">
            <div class="row">
               
                <div class="col-md-10 offset-md-1">
                    <h6 class="text-primary">WHY TO CHOOSE US?</h6>
                    <h1>Best solution for daily updates</h1>
                    <p>By reading newspapers on a daily basis, current events and 
                        world events can have a direct impact on your life. 
                        Our website makes that process easy. 
                        Yes! That's why we present the website Examsdaily.in. 
                        All languages ​​are available on our website. Tamil, English, Malayalam & Hindi etc.
                    </p>

                    <div class="feature d-flex mt-5">
                        <div class="iconbox me-3">
                            <i class="bi bi-hand-thumbs-up"></i>
                        </div>
                        <div>
                            <h5>All in one-theme</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo </p>
                        </div>
                    </div>
                    <div class="feature d-flex">
                        <div class="iconbox me-3">
                            <i class="bi bi-journal-check"></i>
                        </div>
                        <div>
                            <h5>Easy to get</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo </p>
                        </div>
                    </div>
                    <div class="feature d-flex">
                        <div class="iconbox me-3">
                            <i class="bi bi-cloud-arrow-down"></i>
                        </div>
                        <div>
                            <h5>Daily fresh update</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- FEATURES -->

    <!-- PROJECTS -->
    <section id="projects">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">PROJECTS</h6>
                    <h1>Our Recent Work</h1>
                    <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque fuga
                        in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro1.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro2.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro3.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro4.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro5.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="img/pro6.jpg" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Project Title</h4>
                                <h6 class="text-white">Website Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- PROJECTS -->
</div>
</template>
<script>
import LoginModal from './LoginModal.vue';



export default ({
    name: 'Navbar',
    components: {
   
    LoginModal
},
   method: {

   }   
})
</script>
<style scoped>
.navbar .nav-link.active {
  color:  #0d6efd;
}
nav {
  font-family: "Sora", sans-serif;
  line-height: 1.7;
  color: #888;
}
h1,h2,h3,h4,h5,h6,
.display-4 {
    color:#21252f;
    font-weight: 700;
}
.navbar {
  box-shadow:0 8px 22px rgba(0,0,0,0.1);
}

.logo {
  width: 160px;
}

.navbar .nav-link {
  font-size: 14px;
  font-weight: 700;
}


.navbar .nav-link.active {
    color:  #0d6efd;
}

.btn {
    padding: 14px 18px;
    border-width: 2px;
    border-radius: 0;
}
.hero {
  
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 2;
}

.hero::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(21, 20, 51, 0.8);
    z-index: -1;
}

section {
    padding-top: 100px;
    padding-bottom: 100px;
}

.card-effect {
    box-shadow: 0 8px 22px rgba(0,0,0,0.1);
    background-color:  #ffffff;
    padding: 40px;
    
    transition: all 0.35s ease;
}

.card-effect:hover {
    box-shadow: none;
    transform: translateY(5px);
}

.iconbox {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:blue;
    color: white;
    font-size: 32px;
    border-radius: 100px;
    flex: none;
}



.service {
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.service::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: -100%;
    left: 0;
    background-color: #0d6efd;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
}
.service:hover .iconbox {
    background-color:  #ffffff;
    color:  #0d6efd;
}

.service:hover h5,
.service:hover p {
    color:  #ffffff;
}

.service:hover::after {
    opacity: 1;
    top: 0;
}
.col-text{
    text-align:left;
    margin-top:100px;
}
.col-img {
    background-image: url(https://st2.depositphotos.com/1005147/6699/i/450/depositphotos_66996921-stock-photo-surprised-redhead-girl-with-laptop.jpg);
    background-position: center;
    background-size: cover;
    min-height: 800px;
}
.project {
    position: relative;
    overflow: hidden;
}

.project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 20, 51, 0.8);
    padding: 30px;
    display: flex;
    align-items: flex-end;
    transition: all 0.4s ease;
    opacity: 0;
}

.project img {
    transition: all 0.4s ease;   
}

.project:hover .overlay{
    opacity: 1;
}

.project:hover img {
    transform: scale(1.1);
}

</style>



.project {
    position: relative;
    overflow: hidden;
}

.project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 20, 51, 0.8);
    padding: 30px;
    display: flex;
    align-items: flex-end;
    transition: all 0.4s ease;
    opacity: 0;
}

.project img {
    transition: all 0.4s ease;   
}

.project:hover .overlay{
    opacity: 1;
}

.project:hover img {
    transform: scale(1.1);
}


.pricing i {
    font-size: 20px;
    color: #0d6efd;
}

.pricing ul li {
    margin-top: 8px;
}

.team-member img {
    width: 125px;
    height: 125px;
    border-radius: 100px;
}


.social-icons {
    display: flex;
    justify-content: center;
}
.social-icons a {
    width: 34px;
    height: 34px;
    background-color: #0d6efd;
    border-radius: 2px solid #0d6efd;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-left: 5px;
    transition: all 0.4s ease;
    border: 2px solid #0d6efd;
}

.social-icons a:hover {
    color: #0d6efd;
    background-color: transparent;
    border-color: #0d6efd;
}


form input.form-control {
    height: 56px;
}

form .form-control {
    border: transparent;
    border-radius: 0;
    background-color: rgba(0,0,0,0.02);
}


.footer-top {
    padding-top: 90px;
    padding-bottom: 90px;
    background-color:#21252f;
}

.footer-top a {
    color:  #888;
}

.footer-top a:hover {
    color: #ffffff;
}

.footer-bottom {
    background-color: #242933;
}