
    // this is cart javascript start-----------------------------------------------------------------------------
    
    function tasting(product_nam, product_img, product_pri) {
        var mainbuy = document.getElementById("your-cart");

        let each_part = document.createElement("div");
        each_part.setAttribute("class", "each-part");
     
        each_part.setAttribute("id", product_img);
        mainbuy.appendChild(each_part);

        let each_img = document.createElement("img");
        each_img.setAttribute("class", "image-each");
        each_img.src = product_img;
        each_part.appendChild(each_img);

        let each_p = document.createElement("p");
        each_p.setAttribute("class", "name-product");
        each_p.innerText = product_nam;
        each_part.appendChild(each_p);

        let each_price = document.createElement("p");
        each_price.setAttribute("class", "price-per-product");
        let each_i = document.createElement("i");
        each_i.setAttribute("class", "fa-solid fa-dollar");
        each_price.appendChild(each_i);

        each_price.innerHTML += `&nbsp;${product_pri}`;
        each_part.appendChild(each_price);

        let each_input = document.createElement("input");
        each_input.setAttribute("type", "number");
        each_input.setAttribute("class", "number-increament");
        each_input.setAttribute("value", 1);
        each_input.setAttribute("min", 1);

        each_part.appendChild(each_input);

        let each_delete = document.createElement("div");
        each_delete.setAttribute("class", "delete");
        each_part.appendChild(each_delete);

        let each_delete_i = document.createElement("i");
        each_delete_i.setAttribute("class", "fa-solid fa-trash-alt");
        each_delete_i.setAttribute("tok", product_pri);
        each_delete.appendChild(each_delete_i);
        
        let ntok='';
        each_input.addEventListener('change',()=>{
          const inputs_=document.querySelectorAll('#your-cart input');
          
        let total=0;
          total=parseFloat(product_pri)||0;
          const di=eval(`${each_input.value}*${total}`);

          each_delete_i.setAttribute("tok", ntok);
          let main_price_in_hide = document.getElementById("real_price_hide").value+='+'+0;
          let real_total=main_price_in_hide.toString();
          let sec_real_total=eval(real_total);
          let th_real_total=eval(`${sec_real_total}+${di}-${product_pri}`)
          ntok+=th_real_total;
          let main_price_in = document.getElementById("real_price").innerText=eval(th_real_total);
        
        
        })

        each_delete.addEventListener('click',()=>{
        document.getElementById(product_img).remove();
        const inputs_=document.querySelectorAll('#your-cart input');
        let total=0;
          total+=parseFloat(product_pri)||0;
          let main_price_in_hide = document.getElementById("real_price_hide").value+='-'+each_delete_i.getAttribute('tok');
          let real_total=main_price_in_hide.toString();
          let main_price_in = document.getElementById("real_price").innerText=eval(real_total);
        
      })
      const inputs_=document.querySelectorAll('#your-cart input');
        let total=0;
          total+=parseFloat(product_pri)||0;
          let main_price_in_hide = document.getElementById("real_price_hide").value+='+'+total;
          let real_total=main_price_in_hide.toString();
          let main_price_in = document.getElementById("real_price").innerText=eval(real_total);
        
      
      }

   
     function minmum_(){
      let from_=document.getElementById('price_from').value;
      document.getElementById('price_to').setAttribute('min',from_);
     }



 // this is cart javascript end --------------------------------------------------------------------------------------