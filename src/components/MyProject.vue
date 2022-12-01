<template>
<div>

    <div class="bg-image" style="background-image: url('../static/computer.jpg'); 
background-repeat: no-repeat; background-size:cover">

        <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);  
       height:100%; 
       width:100%;"> -->
        <div style="position: fixed;right: 55px;bottom: 55px;z-index: 9999999;background: #29ac00;padding: 3px 10px;border-radius:20px;box-shadow: 0 0 12px -1px rgb(0 0 0 / 50%);">
            <a href="https://api.whatsapp.com/send?phone=919788807422&amp;text=Hello ExamsDaily.in!!" target="_blank"><i class="bi bi-whatsapp" style="color:#fff;font-size: 2em;float: left;"></i>
                <span style="color:#fff;float:left;margin-top:10px;margin-left: 10px;">How can i help you???</span></a>
            <div style="clear:both"></div>
        </div>

        <nav class="navbar navbar-expand-lg py-2 fixed-top navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-logo-png-300x82.png" alt="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
                    <button v-b-modal.modal-center class="btn btn-primary ms-lg-3">Join Us</button>
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
                        <a href="#projects" class="btn btn-outline-light">My Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //HERO -->

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
                                <p>display all the essential info your site needs on a single page,
                                    while incorporating engaging design elements,
                                    like animations, parallax scrolling, image sliders,
                                    and blocks for content. </p>
                            </div>
                        </div>
                        <div class="feature d-flex">
                            <div class="iconbox me-3">
                                <i class="bi bi-journal-check"></i>
                            </div>
                            <div>
                                <h5>Easy to get</h5>
                                <p>On your mobile device, open the Google play Store app. search and downdload our app.
                                    create your account and then tap your Profile picture or initial. Tap News settings .turn on the nodification.
                                    To get your daily briefing, under “Alerts,” turn on Daily briefing nodifications.</p>
                            </div>
                        </div>
                        <div class="feature d-flex">
                            <div class="iconbox me-3">
                                <i class="bi bi-cloud-arrow-down"></i>
                            </div>
                            <div>
                                <h5>Daily fresh updates</h5>
                                <p>Day to day you recieve the fresh updates in our websites</p>
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
                    <p></p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p1.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Test ED</h4>
                                <h6>
                                    <b-link class="text-white" href="https://test.examsdaily.in">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p4.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Encore</h4>
                                <h6>
                                    <b-link class="text-white" href="https://encore.examsdaily.in/">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p2.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">GovtExam Portal</h4>
                                <h6>
                                    <b-link class="text-white" href="https://tamil.govtexamsportal.com/">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p3.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Telecaller ED</h4>
                                <h6>
                                    <b-link class="text-white" href="https://telecaller.examsdaily.in/">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p5.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Sports Daily</h4>
                                <h6>
                                    <b-link class="text-white" href="https://tamil.sportzdaily.in/">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="/static/p6.jpg" alt="" style=" width:350px; height:350px;">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">News portal</h4>
                                <h6>
                                    <b-link class="text-white" href="https://tamil.examsdaily.in/">View Project</b-link>>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- PROJECTS -->

    <!-- TEAM -->
    <section id="team">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">TEAM</h6>
                    <h1>Meet Our Crew Members</h1>
                    <p>A group becomes a team when each member is
                        sure enough of himself and his contribution to praise the skills of others. Thats our team</p>
                </div>
            </div>
            <div class="row text-center g-4">
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="static/t1.jpg" alt="">
                        <h5 class="mb-0 mt-4">Vidhunya</h5>
                        <p>Web Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="static/t2.jpg" alt="">
                        <h5 class="mb-0 mt-4">Krithik Dev</h5>
                        <p>UI Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="static/t3.jpg" alt="">
                        <h5 class="mb-0 mt-4">Dhanu Princy</h5>
                        <p> Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="static/t4.jpg" alt="">
                        <h5 class="mb-0 mt-4">Kannama</h5>
                        <p>Programmer</p>
                        <div class="social-icons">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- TEAM -->

    <!-- CONTACT-->
    <section id="contact">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">CONTACT</h6>
                    <h1>Get In Touch</h1>
                    <p>“Get in touch” is an informal way to say “contact.”
                    </p>
                </div>
            </div>

            <form action="" class="row g-3 justify-content-center">
                <div class="col-md-5">
                    <input type="text" class="form-control" id="username" required placeholder="Enter Name" oninvalid="this.setCustomValidity('Please fill out in this field')" oninput="this.setCustomValidity('')" />
                </div>
                <div class="col-md-5">
                    <input type="mail" class="form-control" id="email" required placeholder="Enter Email" oninvalid="this.setCustomValidity('Please fill out in this field')" oninput="this.setCustomValidity('')" />
                </div>
                <div class="col-md-10">
                    <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Enter Message"></textarea>
                </div>
                <div class="col-md-10 d-grid">
                    <button class="btn btn-primary" @click="submit()">submit</button>
                </div>
            </form>

        </div>
    </section>

    <!-- CONTACT -->

    <!-- FOOTER -->
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-4">
                        <img class="logo" src="static/ed.jpg" alt="">
                    </div>
                    <div class="col-lg-2">
                        <h5 class="text-white">CATEGORY</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Project</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h5 class="text-white">POPULAR SITE</h5>
                        <ul class="list-unstyled">
                            <li><a href="https://tamil.sportzdaily.in/">TAMIL EXAMS DAILY</a></li>
                            <li><a href="https://tamil.examsdaily.in/">SPORTS DAILY</a></li>
                            <li><a href="https://malayalam.examsdaily.in/">MALAYALAM EXAMS DAILY</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 text-primary">
                        <h5 class="text-white">CONTACT</h5>
                        <ul class="list-unstyled">
                            <li>Address: Annai therasa street, Avm Complex, <br>alavasal Madurai-625016</li>
                            <li>Email:info@examsdaily.in</li>
                            <li>Phone: 97888-07422</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="mb-0 text-white">© 2020 copyright all right reserved </p>
                    </div>
                    <div class="col-md-6">
                        <div class="social-icons">
                            <a href="https://www.youtube.com/c/examsdailytamil"><i class="bi bi-youtube"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- FOOTER -->

</div>
</template>

<script>
import Swal from 'sweetalert2';
import LoginModal from './LoginModal.vue';

export default ({
    name: 'Navbar',
    components: {

        LoginModal
    },
    methods: {
        submit: function () {

            {

            }
        }
    }
})
</script>

<style scoped>
.navbar .nav-link.active {
    color: #0d6efd;
}

nav {
    font-family: "Sora", sans-serif;
    line-height: 1.7;
    color: #888;
}

h1,
h2,
h3,
h4,
h5,
h6,
.display-4 {
    color: #21252f;
    font-weight: 700;
}

.navbar {
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
}

.logo {
    width: 160px;
}

.navbar .nav-link {
    font-size: 14px;
    font-weight: 700;
}

.navbar .nav-link.active {
    color: #0d6efd;
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
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
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
    background-color: blue;
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
    background-color: #ffffff;
    color: #0d6efd;
}

.service:hover h5,
.service:hover p {
    color: #ffffff;
}

.service:hover::after {
    opacity: 1;
    top: 0;
}

.col-text {
    text-align: left;
    margin-top: 60px;
}

.col-img {
    background-image: url('~/static/design.jpg');
    background-position: center;
    background-size: cover;
    width: 700px;
    height: 500px;
}

.col-img {

    animation: bounce 3.5s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
    animation-iteration-count: infinite;

}

@keyframes bounce {
    from {
        transform: translate3d(0, 100px, 0);
    }

    to {
        transform: translate3d(0, 150px, 0);
    }
}

/* Prefix Support */

@-webkit-keyframes bounce {
    from {
        -webkit-transform: translate3d(0, 100px, 0);
        transform: translate3d(0, 0, 0);
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 150px, 0);
    }
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

.project:hover .overlay {
    opacity: 1;
}

.project:hover img {
    transform: scale(1.3);

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
    background-color: rgba(0, 0, 0, 0.02);
}

.footer-top {
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #21252f;
}

.footer-top a {
    color: primary;

}

.footer-top a:hover {
    color: #ffffff;
}

.footer-bottom {
    background-color: #242933;
}
</style>
