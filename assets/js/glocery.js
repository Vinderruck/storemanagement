

//Creating an array storing having the product
const products = [
    { name: "Blanket", id: 1, price: 200, quantity: 200 },
    { name: "Thermos", id: 2, price: 100, quantity: 20 },
    { name: "Gas-cylinder", id: 3, price: 500, quantity: 10 },
    { name: "Pillow", id: 4, price: 30, quantity: 50 },
    { name: "Milk", id: 5, price: 2.50, quantity: 100 },  // Added new products
    { name: "Eggs", id: 6, price: 3.00, quantity: 50 },
    { name: "Bread", id: 7, price: 1.50, quantity: 150 },
    { name: "Cereal", id: 8, price: 5.00, quantity: 75 },
    { name: "Coffee", id: 9, price: 7.99, quantity: 25 },
    { name: "Sugar", id: 10, price: 2.00, quantity: 100 },
    { name: "Salt", id: 11, price: 1.00, quantity: 75 },
    { name: "Pasta", id: 12, price: 1.25, quantity: 200 },
    { name: "Rice", id: 13, price: 3.50, quantity: 80 },
    { name: "Cooking Oil", id: 14, price: 4.99, quantity: 50 },
    { name: "Canned Vegetables", id: 15, price: 1.75, quantity: 120 },
  ];
  
  


 // function for creating the spreadsheet like display to show the item to monitor
 
window.onload = () =>{
    const startbutton = document.getElementById("Opening-store");
function opening(){
    const start = document.getElementById("start_button")

    //Element creation which are div,button and input
    const Store=document.createElement("div");
    const searchbar = document.createElement("div");
    const innersearchbar =document.createElement("div")
    const inneradd =document.createElement("div")
    const Container= document.createElement("div");
    
    const searchbutton = document.createElement("button");
    const Addbutton = document.createElement("button");
    Addbutton.textContent = "Add New Product"
   
  
      const inputsearch = document.createElement("input");
      inputsearch.type = "text";
      inputsearch.placeholder="Search items";
      inputsearch.id = "searchinput";
      innersearchbar.appendChild(inputsearch)
      
      //Adding EventListener on input
     
        inputsearch.addEventListener("input", e => {
          // Access the user input here:
          const userinput = e.target.value.trim().toLowerCase();
         
          const filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
           return productName.includes(userinput);    
          });
        Container.textContent = ``;
        if (filteredProducts.length > 0) {
          // Create table rows for filtered products
          const table = document.createElement("tr");
          const tablehead = document.createElement("th")
          tablehead.textContent=`GLOCERY PRODUCTS MANAGMENT`;
          Container.appendChild(table);
          table.appendChild(tablehead);
          tablehead.style.fontSize = "4rem";
          tablehead.style.marginbottom = "4rem;"
          tablehead.className = "head"
         
          filteredProducts.forEach(product => {
           // tr()
            const tableRow = document.createElement("tr");
      
            // Create  table cell for the data
            const idCell = document.createElement("td");
            //having display of id
            idCell.textContent = product.id;  
      
             // namecell
            const nameCell = document.createElement("td");
            //having diosplay of name
            nameCell.textContent = product.name; 
            //quantity
            const QuantityCell = document.createElement("td");
            //having displa of quantity
            QuantityCell.textContent = product.quantity; 
            //  price cell
            const priceCell = document.createElement("td");
            //having display of price
            priceCell.textContent = product.price; 
      
             
      
           
            
            // Append more table cells to the row
            tableRow.appendChild(idCell);
            tableRow.appendChild(nameCell);
            tableRow.appendChild(QuantityCell);
            tableRow.appendChild(priceCell);


            tableRow.querySelectorAll("td").forEach((td,index) => {

              let hoverText;
              switch (index) {
                case 0:
                  hoverText = `Product ID: ${product.id}`;
                  break;
                case 1:
                  hoverText = `Product Name: ${product.name}`;
                  break;
                case 2:
                  hoverText = `Product Quantity: ${product.quantity}`;
                  break;
                case 3:
                  hoverText = `Product Price: ${product.price}`;
                  break;
                default:
              }
           td.addEventListener("mouseover",() => {
            // Create a temporary element to display the hover text
            const hoverElement = document.createElement("div");
            hoverElement.textContent = hoverText;
            hoverElement.style.position = "absolute";
            hoverElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            hoverElement.style.color = "#fff";
            hoverElement.style.padding = "1rem";
            // Position the hover element relative to the td (adjust as needed)
            hoverElement.style.top =  "2rem";
            hoverElement.style.left =  "30rem"
            document.body.appendChild(hoverElement);
            td.addEventListener("mouseout", () => {
            if(hoverElement){
              document.body.removeChild(hoverElement); // Remove hover element on mouseout
            }
            else {
              console.log("error")
            }
               })
              })
            })

            //button creation in search input EventListener
            const buttoncontainer =document.createElement("div");
            tableRow.appendChild(buttoncontainer)
   buttoncontainer.id ="dropdiv";
           
            Container.appendChild(tableRow);})
          }
 
        console.log(filteredProducts)
           
          
          
         console.log(userinput); // Example: Log the user input
        });
       
      //end of input evenListener            
              
      
     
    //creating the theme change clicks
    const buttonlight = `<svg  id="light1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
    </svg>`;
    const buttonlight2 = `<svg  id="light2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
    </svg>`
    const parse = new DOMParser();
    // converting from string readable cp state
    const buttonparse2=parse.parseFromString(buttonlight2,"text/html")
    const buttonparse = parse.parseFromString(buttonlight,"text/html")
    const svgbutton= buttonparse.getElementById("light1");
    const svgbutton2=buttonparse2.getElementById("light2")

// ids and class-Name
Store.id="Store";
Container.id="Container";
searchbar.className = "searchbar";
searchbutton.className = "searchbutton";
innersearchbar.className="inner";
Addbutton.className = "Addbutton"
inneradd.className = "innerAdd";
searchbutton.textContent ="Search"

 
           



//appendchildren
    start.appendChild(Store);
    Store.appendChild(searchbar)
    Store.appendChild(Container)
    searchbar.appendChild(inneradd)
    searchbar.appendChild(innersearchbar)
    searchbar.appendChild(svgbutton)
    inneradd.appendChild(Addbutton)
    innersearchbar.appendChild(searchbutton)
    
    

    
    //added event listener to the theme changer this outer is to display the hover text
    svgbutton.addEventListener("mouseover",() => {
      
      const darkdispalyhover=document.createElement("div");
      Store.appendChild(darkdispalyhover);
      darkdispalyhover.textContent = `Dark mode activation`;
      darkdispalyhover.style.border = "1px solid black";
      darkdispalyhover.style.borderRadius = "1rem";
      darkdispalyhover.style.padding = "0.3rem";
      darkdispalyhover.style.top = "2rem";
      darkdispalyhover.style.backgroundColor = "#fff";
      darkdispalyhover.style.fontSize = "2rem";
      darkdispalyhover.style.left = "30rem";
      darkdispalyhover.style.position = "absolute";
       
       
   
      
           
//This line of code is rsponsible for changing the them with the click
         svgbutton.addEventListener("click",()=>{
           
          if(Store.contains(darkdispalyhover)){
            Store.removeChild(darkdispalyhover);
          }
            searchbar.appendChild(svgbutton2)
            if(svgbutton || svgbutton2){
            svgbutton.parentNode.replaceChild(svgbutton2, svgbutton);
           
            Store.style.backgroundColor=" #2B3D48";
            searchbar.style.backgroundColor = "black";
            searchbar.style.borderColor = "#00ff60";
            searchbar.style.boxShadow = "2px 1px 2px 2px #fff";
            searchbar.style.borderRadius = "5rem";
            table.style.Color = "#fff";
            Container.style.backgroundColor = "white";
            Container.style.borderRadius = "5rem";
            }
           
            });
            
             svgbutton.addEventListener("mouseout",() =>{
              if(darkdispalyhover){
              Store.removeChild(darkdispalyhover);
              }
              else{
                console.log("darkdisplayhover Not removed")
              }

            })
            
        });


        // This vnt lisener changes the mood of the back ground though it start with the mouse event to display the hover
        svgbutton2.addEventListener("mouseover", () => {
          const Lightdispalyhover=document.createElement("div");
          Store.appendChild(Lightdispalyhover);
          Lightdispalyhover.textContent = `Light mode activation`;
          Lightdispalyhover.style.border = "1px solid black";
          Lightdispalyhover.style.borderRadius = "1rem";
          Lightdispalyhover.style.padding = "0.3rem";
          Lightdispalyhover.style.top = "2rem";
          Lightdispalyhover.style.backgroundColor = "#fff";
          Lightdispalyhover.style.fontSize = "2rem";
          Lightdispalyhover.style.left = "30rem";
          Lightdispalyhover.style.position = "absolute";

         


        svgbutton2.addEventListener("click",()=>{
          Store.removeChild(Lightdispalyhover);
          
            svgbutton2.parentNode.replaceChild(svgbutton, svgbutton2);
           Store.style.backgroundColor="white";
           searchbar.style.borderRadius = "0rem";
            searchbar.style.background = "#00ff60"
           
        })
        svgbutton2.addEventListener("mouseout", () => {
          Store.removeChild(Lightdispalyhover);
          
        })
        
      });

//removing the button after its work    
startbutton.remove();
     

  //Creating a table
   
    const table = document.createElement("tr");
    const tablehead = document.createElement("th")
    tablehead.textContent=`GLOCERY PRODUCTS MANAGMENT`;
    Container.appendChild(table);
    table.appendChild(tablehead);
    tablehead.style.fontSize = "4rem";
    tablehead.style.marginbottom = "4rem;"
    tablehead.className = "head"


   // iterating through the array
   
   products.forEach(product =>{
    
    
  let productIndex;
  const productTr= document.createElement("tr")
    
    Container.appendChild(productTr);
    productTr.id = "productTr"
     

    // row Id for display
    const productTh = document.createElement("td");
    
    productTr.appendChild(productTh)
    productTh.dataset.product = productIndex;
    productTh.textContent=product.id;

     //Name for display
    const NameTd = document.createElement("td");
    productTr.appendChild(NameTd)
    NameTd.textContent=product.name;
    

    // array quantity to display
    const quantityTd = document.createElement("td");
    productTr.appendChild(quantityTd)
    quantityTd.textContent=product.quantity;
    //array  price display
    const priceTd = document.createElement("td");
    productTr.appendChild(priceTd)
    priceTd.textContent=product.price;

   
    
    //adding event listenr to the td out of the udate button which is down this code
    productTr.querySelectorAll("td").forEach((td,index) => {

      let hoverText;
      switch (index) {
        case 0:
          hoverText = `Product ID: ${product.id}`;
          break;
        case 1:
          hoverText = `Product Name: ${product.name}`;
          break;
        case 2:
          hoverText = `Product Quantity: ${product.quantity}`;
          break;
        case 3:
          hoverText = `Product Price: ${product.price}`;
          break;
        default:
      }
   td.addEventListener("mouseover",() => {
    // Create a temporary element to display the hover text
    const hoverElement = document.createElement("div");
    hoverElement.textContent = hoverText;
    hoverElement.style.position = "absolute";
    hoverElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hoverElement.style.color = "#fff";
    hoverElement.style.padding = "1rem";
    // Position the hover element relative to the td (adjust as needed)
    hoverElement.style.top =  "2rem";
    hoverElement.style.left =  "30rem"
    document.body.appendChild(hoverElement);
    td.addEventListener("mouseout", () => {
    if(hoverElement){
      document.body.removeChild(hoverElement); // Remove hover element on mouseout
    }
    else {
      console.log("error")
    }
       })
      
   
   });
    
    
      });

    //update button div having a button for the update
  
    const buttoncontainer =document.createElement("div");
    productTr.appendChild(buttoncontainer)
   buttoncontainer.id ="dropdiv";
     

    //Creating the update button arrow down
    const buttonsvg=`<svg id="drop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>`
    const parse = new DOMParser()
    const svgbutton =parse.parseFromString(buttonsvg,"text/html");
    const svgready=svgbutton.getElementById("drop");
    buttoncontainer.appendChild(svgready);
    

    //EventListener on the button for update
    let clickCount =0;
    let buttonsCreated = false;
     
    svgready.addEventListener("click",(event)=>{
        //clickCount++
        const buttons = buttoncontainer.querySelectorAll("button")
       if(!buttonsCreated) 
       {
         const button=document.createElement("button");
         buttoncontainer.appendChild(button);
         button.textContent="update";
         button.id="allbutton"


         const button1=document.createElement("button");
         buttoncontainer.appendChild(button1);
         button1.textContent="Delete";
         button1.id="allbutton"
         buttonsCreated = true;  
         

        // Ading event listener to update button
        button.addEventListener("click",(event) => 
        {
            const ClickedRow = event.target.closest('tr')
            console.log(ClickedRow);
            if(ClickedRow){
                Container.innerHTML = ``;
                productTr.removeChild(buttoncontainer)
                
                const id = ClickedRow.querySelector('td:nth-child(1)').textContent;
                const name = ClickedRow.querySelector('td:nth-child(2)').textContent;
    const quantity = ClickedRow.querySelector('td:nth-child(3)').textContent;
    const price = ClickedRow.querySelector('td:nth-child(4)').textContent;
     
     // creating new table
    const table = document.createElement("tr");
    const tablehead = document.createElement("th")
    tablehead.textContent=`GLOCERY PRODUCTS MANAGMENT`;
    Container.appendChild(table);
    table.appendChild(tablehead);
    tablehead.style.fontSize = "4rem";
    tablehead.style.marginbottom = "4rem;"
    tablehead.className = "head"
   //display of product 
   const productTr1= document.createElement("tr")
    Container.appendChild(productTr1);
    

    // row Id for display in update button click
    const productTh1 = document.createElement("td");
    
    productTr1.appendChild(productTh)
    productTh1.dataset.product = productIndex;
    productTh1.textContent=id;



    //display of nam in updat button click
    const NameTd1 = document.createElement("td");
    productTr1.appendChild(NameTd1)
    NameTd1.textContent=name;

     // array quantity to display in update button click
     const quantityTd1 = document.createElement("td");
     productTr1.appendChild(quantityTd1)
     quantityTd1.textContent=quantity;


     //array  price display in update button click
     const priceTd1 = document.createElement("td");
     productTr1.appendChild(priceTd1)
     priceTd1.textContent=price;
     


     //Adding eventlistener to td

     productTr1.querySelectorAll("td").forEach((td,index) => {

        let hoverText;
        switch (index) {
          case 0:
            hoverText = `Product ID: ${product.id}`;
            break;
          case 1:
            hoverText = `Product Name: ${product.name}`;
            break;
          case 2:
            hoverText = `Product Quantity: ${product.quantity}`;
            break;
          case 3:
            hoverText = `Product Price: ${product.price}`;
            break;
          default:
        }
     td.addEventListener("mouseover",() => {
      // Create a temporary element to display the hover text
      const hoverElement = document.createElement("div");
      hoverElement.textContent = hoverText;
      hoverElement.style.position = "absolute";
      hoverElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      hoverElement.style.color = "#fff";
      hoverElement.style.padding = "1rem";
      // Position the hover element relative to the td (adjust as needed)
      hoverElement.style.top =  "25rem";
      hoverElement.style.left =  "30rem"
      document.body.appendChild(hoverElement);
      td.addEventListener("mouseout", () => {
        document.body.removeChild(hoverElement); // Remove hover element on mouseout
      })
     
     });
    
        });

    //Construction button container for td
     const buttoncontainer1 =document.createElement("div");
     productTr1.appendChild(buttoncontainer1)
    buttoncontainer1.id ="dropdiv";
    const buttonsvg=`<svg id="drop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>`
    const parse = new DOMParser()
    const svgbutton1 =parse.parseFromString(buttonsvg,"text/html");
    const svgready1=svgbutton1.getElementById("drop");
    buttoncontainer1.appendChild(svgready1);

    //adding eventListener to the inner button nested in update buton
    let clickCount =0;
    let buttonsCreated1 = false;
     
    svgready1.addEventListener("click",(event)=>{
        //clickCount++
        const buttons = buttoncontainer1.querySelectorAll("button")
       if(!buttonsCreated1) 
       {
         const button=document.createElement("button");
         buttoncontainer1.appendChild(button);
         button.textContent = "edit";
         button.id = "allbutton";


         const button2=document.createElement("button");
         buttoncontainer1.appendChild(button2);
         button2.textContent="save";
         button2.id="allbutton";
         buttonsCreated1 = true;  
        } 
        else if
        (buttonsCreated1) { // Check if buttons already exist
        buttons.forEach(button => buttoncontainer1.removeChild(button)); // Remove buttons
        buttonsCreated1 = false; // Reset flag for next creation
      }
    
            })
    
            }
        })
           
           
       
       } 
        else if
        (buttonsCreated) { // Check if buttons already exist
        buttons.forEach(button => buttoncontainer.removeChild(button)); // Remove buttons
        buttonsCreated = false; // Reset flag for next creation
      }
       
   
   event.stopPropagation()
    })
        })
    
    
}
    //This function helps in the start by displaying directiin text after a specific time
      const interval =1000;
      let hoverTime = false;
      function Helpuserstart(){
        if(!hoverTime){
        const start = document.getElementById("start_button")
        const starthover = document.createElement("div");
        start.appendChild(starthover);
        starthover.id = "starthover";
        starthover.textContent=" WELCOME!!! CLICK THE GLOCERY STORE TEXT TO CONTINUE";
        hoverTime =true ;

        }
                }      
                //callin the fuction

    const startinterval = setInterval(Helpuserstart,interval);
                
               
      //This is th ebutton starting the system---eventlistener that call the other functions
    startbutton.addEventListener("click", () =>{
      clearInterval(startinterval);
      opening()
})
}

 
 
