$(document).ready(function() {
    $(".link-items .link-item").on("click", function(e) {
        var modalbox = $("#modalbox");
        var charaDetailSuper = modalbox.find(".charaDetailSuper");
        var cdsborboxWrapper = charaDetailSuper.find(".borboxWrapper");
        var cdsimg = charaDetailSuper.find(".image img");
        var profile_ttl = charaDetailSuper.find(".profile .section_ttl");
        var profile_List = charaDetailSuper.find(".profile .profLst");
        var detail_ttl = charaDetailSuper.find(".detail .section_ttl");
        var detail_text = charaDetailSuper.find(".detail .txt");
        var moreInfo = charaDetailSuper.find(".moreinfo")
        TweenMax.set($(".bgWhite"), {
                height: 0,
                opacity: 0
            }),
            TweenMax.to($(".bgWhite"), 1, {
                height: "300%",
                opacity: 1,
                ease: Power2.easeOut
            }),
            TweenMax.set($(".controller"), {
                opacity: 0
            }),
            TweenMax.to($(".controller"), .5, {
                delay: .5,
                opacity: 1,
                ease: Power2.easeOut
            }),
            setTimeout(function() {
                var delaytime = 0;
                TweenMax.to($(".bgWhite"), 0, {
                        delay: .2,
                        height: "300%",
                        opacity: 1,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            TweenMax.set($("#modalbox"), {
                                display: "block"
                            });
                        }
                    }),
                    TweenMax.set([$(".bgLT .back"), $(".bgLT .front")], {
                        background: "#fc608f",
                        transform: "translate(-150px, -150px)"
                    }),
                    TweenMax.set([$(".bgRB .back"), $(".bgRB .front")], {
                        background: "#fc608f",
                        transform: "translate(150px, 150px)"
                    }),
                    TweenMax.to($(".back"), .5, {
                        delay: delaytime,
                        transform: "translate(0, 0)",
                        ease: Power3.easeOut
                    }),
                    TweenMax.to($(".front"), .5, {
                        delay: delaytime + .2,
                        transform: "translate(0, 0)",
                        ease: Power3.easeOut
                    }),
                    TweenMax.set(cdsborboxWrapper, {
                        transform: "translate(300px, -300px)",
                        opacity: 0
                    }),
                    TweenMax.to(cdsborboxWrapper, .6, {
                        delay: delaytime,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.set(cdsimg, {
                        transform: "translate(-300px, 300px)",
                        opacity: 0
                    }),
                    TweenMax.to(cdsimg, .6, {
                        delay: delaytime + .2,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.set(profile_ttl, {
                        opacity: 0
                    }),
                    TweenMax.to(profile_ttl, .6, {
                        delay: delaytime + .6,
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.set(profile_List, {
                        transform: "translate(100px, 0)",
                        opacity: 0
                    }),
                    TweenMax.staggerTo(profile_List, .6, {
                        delay: delaytime + .6,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }, .1),
                    TweenMax.set([detail_ttl, detail_text,moreInfo], {
                        transform: "translate(100px, 0)",
                        opacity: 0
                    }),
                    TweenMax.to(detail_ttl, .6, {
                        delay: delaytime + 1,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.to(detail_text, .6, {
                        delay: delaytime + 1.2,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.to(moreInfo, .8, {
                        delay: delaytime + 1.4,
                        transform: "translate(0, 0)",
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.to($(".controller"), .4, {
                        opacity: 1,
                        ease: Power2.easeOut
                    }),
                    TweenMax.set(charaDetailSuper, {
                        display: "block"
                    });
                TweenMax.set($(modalbox), {
                    display: "block"
                });
            }, 400);
        TweenMax.set($("#modalbox"), {
                display: "block"
            }),
            TweenMax.set($("#stage"), {
                position: "fixed"
            });
    })
    $(".close").on("click", function(e) {
        var delaytime = 0;
        var charaDetailSuper = $(".charaDetailSuper");
        var cdsborboxWrapper = charaDetailSuper.find(".borboxWrapper");
        var cdsimg = charaDetailSuper.find(".image img");
        TweenMax.to(cdsborboxWrapper, .4, {
                delay: delaytime,
                transform: "translate(300px, -300px)",
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    TweenMax.set(charaDetailSuper, {
                        display: "none"
                    })
                }
            }),
            TweenMax.to(cdsimg, .4, {
                delay: delaytime,
                transform: "translate(-300px, 300px)",
                opacity: 0,
                ease: Power2.easeOut
            }),
            TweenMax.to($(".bgLT .back"), .3, {
                delay: delaytime,
                transform: "translate(-150px, -150px)",
                ease: Power3.easeOut
            }),
            TweenMax.to($(".bgLT .front"), .3, {
                delay: delaytime,
                transform: "translate(-150px, -150px)",
                ease: Power3.easeOut
            }),
            TweenMax.to($(".bgRB .back"), .3, {
                delay: delaytime,
                transform: "translate(150px, 150px)",
                ease: Power3.easeOut
            }),
            TweenMax.to($(".bgRB .front"), .3, {
                delay: delaytime,
                transform: "translate(150px, 150px)",
                ease: Power3.easeOut
            }),
            TweenMax.to($(".controller"), .4, {
                opacity: 0,
                ease: Power2.easeOut
            }),
            TweenMax.to($(".bgWhite"), .4, {
                delay: .2,
                height: 0,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    TweenMax.set($("#modalbox"), {
                        display: "none"
                    });
                    // $(".thumbs ").removeClass("active");
                    // var thumbsimg = $(".thumbs " + " img"),
                    //     temp = thumbsimg.attr("src");
                    // thumbsimg.attr("src", temp.replace("_on.", "_off."));
                }
            }),
            TweenMax.set($("#main"), {
                top: 0
            });
            //var profile = $(".profLst").remove();
            
    })
})

$(document).ready(function(){
    $(".moreinfo").on("click",function(){
        var val = "隆凯"
        var name = {"name":val}
        var host = "http://localhost:8080/BlogSever_war_exploded/GetFriend"
        Query(1,name);
        // $.ajax({
        //     async: false,
        //     url: host,
        //     type:"post",
        //     data:name,
        //     dataType:"json",
        //     success: function (data) {
        //         alert(JSON.stringify(data));
                
        //     }
        // })
        // var profile = $(".profile");
        // var profLst = $("<dl></dl>");
        // var profLstdt = $("<dt></dt>");
        // var profLstdd = $("<dd></dd>");
        // profLst.addClass("profLst");
        // profLst.css({"opacity": 1,"transform": "matrix(1, 0, 0, 1, 0, 0)"});
        // profLstdt.text("jiaoshane");
        // profLstdd.text(":woyebuzhidao");
        // profLst.append(profLstdt,profLstdd);
        // profile.append(profLst);
    })
})

function Query (type,name) {
    var host = "";
    var keys = [];
    if(type)
    {
        host = "http://localhost:8080/BlogSever_war_exploded/GetFriend";
        keys = ["name","expertise","hobby","profile","detail"]
    }
    else{
        host = ""
    }
    $.ajax({
        async: false,
            url: host,
            type:"post",
            data:name,
            dataType:"json",
            success: function (data) {
                alert(JSON.stringify(data));
                Addtag(keys,data)
            }
    })
  }

function Addtag (keys,data) {
    var profile = $(".profile");
    for(i=0;i<5;i++)
    {
        var profLst = $("<dl></dl>");
        var profLstdt = $("<dt></dt>");
        var profLstdd = $("<dd></dd>");
        profLst.addClass("profLst");
        profLst.css({"opacity": 1,"transform": "matrix(1, 0, 0, 1, 0, 0)"});
        profLstdt.text(keys[i]);
        profLstdd.text("："+data.friend[0][keys[i]]);
        profLst.append(profLstdt,profLstdd);
        profile.append(profLst);
    }
  }