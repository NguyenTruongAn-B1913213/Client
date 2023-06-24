<template>
    <div class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    <div class="footer-title">
                        <h3>ĐIỀU HƯỚNG</h3>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="footer-title">
                        <img src="../img/footer/logo-footer.png" class="footer-img" alt="">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint mollitia quidem delectus, magni vel dolorum.</p>
                    </div>
                    <div class="search">
                        <input type="email" placeholder="Email..." >
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="footer-title">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <p>319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                        <a href="#">0102031231</a>
                        <a href="#">an@gmail.com</a>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer-footer',
}


</script>

<style>
.footer{
    background: black;
}
.row{
    padding: 30px 60px 30px 60px; 
    
}

.footer-title{
    color: white;
    padding: 50px 0;
    width: 100%;
}
.footer-title p{
    text-align: left;
    font-size: 15px;
    color: #8f8f8f;
    margin-top: 30px;
}
.footer-img{
    width: 150px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}

.footer-title h3{
    margin-top: 15px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
}
.footer-title a{
    display:block;
    text-decoration: none;
    color: white;
}
.footer-title a:hover{
    color: orange;
}

.search{
    padding: 0 30px;
    padding-bottom: 40px;
}
.search input{
    width: 100% ;
    padding:10px;
    border-radius: 20px;
}

</style>