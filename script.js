function testAsync(){
    return new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
            resolve();
        ;} , 600
        );
    });
}

async function changeM(element){
    firstFunction();
    await testAsync();
    secondFunction(element);
    thirdFunction();
}

function firstFunction(){
     $("#img1 ,#img2").animate({left: '+=180px', top: '-=40px', opacity: '0.2'}, "slow");
     $("#headText").animate({fontSize:'20px'}, "slow"); 
    
}
function secondFunction(element){
    var a = element.innerHTML;
    
    
    switch(a){
          case "Men":
            
            document.getElementById("info1").innerHTML = "Nike Air Max 270 G | $86.45";
            document.getElementById("info2").innerHTML = "Nike Blazer Low 77 | $91.24";
            document.getElementById("headText").innerHTML = "Men's shoes";
            document.getElementById("headText2").innerHTML = "Fresh Picks for You!";
            
            document.getElementById("img1").src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/342d8372-1c31-4def-8b5d-1c27568677d0/air-jordan-1-mid-se-shoes-MkNjwX.png";
            document.getElementById("img2").src ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19748bd0-5a80-4583-9c3f-e29a24044a58/air-max-270-g-golf-shoe-qdKfmN.png";
            break;
        
        case "Women":
            document.getElementById("info1").innerHTML = "Air Jordan 1 Low SE | $98.78";
            document.getElementById("info2").innerHTML = "Nike Blazer Mid '77 LX | $97.60";
            document.getElementById("headText").innerHTML = "Women's shoes";
            document.getElementById("headText2").innerHTML = "Fresh Picks for You!";
           
            document.getElementById("img1").src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc23da7e-e3a4-4708-ace8-e7a83e46961a/air-jordan-1-mid-se-utility-shoes-X2g8Xx.png";
            document.getElementById("img2").src ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eda4c2e9-5b2b-4931-9016-fed6be788c90/blazer-mid-77-lx-shoes-sBDHmN.png";

            break;

        case "Winter Wear":
                        document.getElementById("info1").innerHTML = "Nike Sportswear Storm-FIT City Series | $106.38";
            document.getElementById("info2").innerHTML = "Nike Sportswear Therma-FIT Repel | $94.56";
            document.getElementById("headText").innerHTML = "Winter Wear";
            document.getElementById("headText2").innerHTML = "Fresh Picks for You!";
        
            document.getElementById("img1").src = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59402368-dbac-49f5-a677-9abf7c79d710/sportswear-city-series-hooded-jacket-CK8FW7.png";
            document.getElementById("img2").src ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3d24c04d-201a-4b98-8940-aa2b5ba1eab7/sportswear-repel-hooded-jacket-Cg1DZl.png";

            break;    
        }
        
        $("#headText").animate({fontSize:'30px'}, "slow");
          
}
function thirdFunction(){
     $("#img1 , #img2").animate({left: '-=180px', top: '+=40px', opacity: '1'}, "slow");
}

  function sale(){
    $("#headText2").animate({left: "+=5px"});
    $("#headText2").animate({left:"-=5px"});
  }
function bigger(element){
    element.style.fontSize = "25px";
    element.style.borderBottom = "1px solid white";
}
function smaller(element){
    element.style.fontSize = "20px";
    element.style.borderBottom = "0px";
}
function loading(){
    $(".content").animate({opacity:1}, "slow");
    
}
