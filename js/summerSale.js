
function completeFullTask(cardNo,itemNo,price){
    document.getElementById(cardNo).addEventListener('click',function(){
        const item=document.getElementById(itemNo).innerText;
        // adding clicked items in items names container div
        const itemsNameContainer=document.getElementById('items-name-container');
        const count=itemsNameContainer.childElementCount;
        const p=document.createElement('p');
        p.innerHTML=`${count+1}. ${item} `;
        itemsNameContainer.appendChild(p);
        
        // get clicked item price
       const itemElement=document.getElementById(price);
       const itemPriceString=itemElement.innerText.split(' ')[0];
       const itemPrice=parseFloat(itemPriceString);
       
       const totalPriceElement=document.getElementById('total-price');
       const totalPriceString=totalPriceElement.innerText;
       const totalPrice=parseFloat(totalPriceString);
      
       const newTotalPrice=itemPrice+totalPrice;
       totalPriceElement.innerText=newTotalPrice.toFixed(2);

        const totalElement=document.getElementById('total');
        const totalString=totalElement.innerText;
        const total=parseFloat(totalString);
        const newTotal=total+itemPrice;
        totalElement.innerText=newTotalPrice.toFixed(2);
        
        const makeButton= document.getElementById('make-purchase-button');
        if(itemPrice>0){
            makeButton.removeAttribute('disabled');
        
        }
        else{
            makeButton.setAttribute('disabled',true);
        }
        const discountElement=document.getElementById('discount-amount');
        const discountAmountString=discountElement.innerText;
        const discountAmount=parseFloat(discountAmountString);
        const applyButton=document.getElementById('apply-button');
        if(newTotalPrice>=200){
           applyButton.removeAttribute('disabled');
           
            document.getElementById('apply-button').addEventListener('click',function(){
                const discountCouponCode=document.getElementById('discount-coupon-code').value;
            
             if(discountCouponCode!=='SELL200'){
                alert('Please,give valid coupon code');
             }
             else{
                const amountOfDiscount=newTotalPrice*(20/100);

                discountElement.innerText=amountOfDiscount.toFixed(2);
                const finalTotal=newTotalPrice-amountOfDiscount;
                
                totalElement.innerText=finalTotal.toFixed(2);
             }
            })
           
        
        }
        else{
            applyButton.setAttribute('disabled',true);
        }
       
    });

}
completeFullTask('first-card','first-item','first-item-price');
completeFullTask('second-card','second-item','second-item-price');
completeFullTask('third-card','third-item','third-item-price');
completeFullTask('fourth-card','fourth-item','fourth-item-price');
completeFullTask('fifth-card','fifth-item','fifth-item-price');
completeFullTask('sixth-card','sixth-item','sixth-item-price');

function goHomePage(){
    window.location.href="./index.html";
}
