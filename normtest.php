<?php

    session_start();  
    require_once "libs/Smarty.class.php";
    $smarty = new Smarty();

/*
    if(isset($_SESSION["account"])){
        $username = $_SESSION["account"];
    }
    else{
        
        $username = NULL;
    }

    if($username==NULL){
        $smarty->assign("login", "login");
        $smarty->assign("login_text","登入");
        $smarty->assign("username","");
        $smarty->assign("login_status",0);
    }else{        
        $smarty->assign("login", "logout");
        $smarty->assign("login_text","登出");
        $smarty->assign("username",$username);
        $smarty->assign("login_status",1);

    }
*/

    $postback = isset($_POST["postback"]);
    if ($postback)
    {
        $_SESSION["test_email"] = $_POST["test_email"];
        $smarty->display("normtest.html");
    }
    else{
        $smarty->display("pre_test_page.html");
    }
?>