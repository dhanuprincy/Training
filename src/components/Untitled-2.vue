<script>


export default ({

    name: 'LoginModal',

    data() {
        return {
            form1: true,
            form2: false,
            submit: true,
            update: false,
            pwdHide: true,
            tableHide: true,
            input: {
                Username: "",
                Email: "",
                MobileNo: "",
                Password: "",
                ConfirmPassword: "",
                editIndex: 0,

            },
            users: [],

        }
    },
method: {
    save: function(){
        console.log("===========================save===");
    },
    
},
})
</script>