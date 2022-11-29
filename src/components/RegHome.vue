<template>
<!-- <div class="p-6 text-center bg-image" style="
    background-image: url('../static/computer.jpg'); background-repeat: no-repeat; background-size:100% 100%;">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6); padding:80px;">
        </div> -->
<!-- </div> -->
<div id="" class="">

    <div class="bg-image" style="
        background-image: url('../static/computer.jpg'); background-repeat: no-repeat; background-size:100% 100%; height: 100vh;">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6); height:100%; width:100%;">

            <b-container fluid>
                <div style="padding:150px;">
                    <h1 class="text-white display-1" style="font-family: monospace;">HELLO!</h1>
                    <p class="text-white"> <i class="bi bi-dash-lg"></i> Good to see you here <i class="bi bi-dash-lg"></i></p>

                    <a v-b-toggle href="#example-collapse1" @click.prevent>
                        <h5 style=" border:none;text-align: center; color:red;"><i class="bi bi-chevron-compact-down"></i></h5>
                    </a>
                    <!-- <a v-b-toggle href="#example-collapse2" @click.prevent><h5 style=" border:none;text-align: center; color:yellow;">WE ARE CREATIVE</h5></a> -->

                    <b-collapse id="example-collapse1">
                        <b-card class="mx-auto bg-transparent" style=" color:yellow; font-family:cursive; opacity:0.5;">
                            <h1><i class="bi bi-emoji-heart-eyes"></i> </h1>

                            <h3>ExamsDaily <br> is your resource hub for Current Affairs, General Knowledge, Exam Notifications,<br> Competitive Exam preparation, etc...<br> We provide you with the latest version. <br> <i class="bi bi-three-dots"></i></h3>

                        </b-card>
                    </b-collapse>

                    <!-- <b-collapse id="example-collapse2">
                    <b-card class="mx-auto bg-dark" style="width: 30%; height:80%; color:white;" title="About us">

                    <p1>ExamsDaily is your resource hub for Current Affairs, General Knowledge, Exam Notifications, Competitive Exam preparation, etc. We provide you with the latest
                    Contact us: info@examsdaily.in</p1>
                    </b-card>
                    </b-collapse> -->
                </div>
            

            </b-container>

        </div>

    </div>
                     <!-- <b-button v-b-toggle.my-collapse  class="mxbtn bg-transparent" style="margin-top:50px;" color="tetriary" ><h1 style=" border:none;text-align: center; ">WE ARE CREATIVE</h1></b-button>  -->

</div>
</template>

<script>
export default {
    name: 'RegHome'
}
</script>

<style>


</style>
