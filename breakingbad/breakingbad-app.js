 
 /**
  * @returns{Object}  quote information
  */
 const fetchQuote=async ()=>{
const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
const data=await res.json();

console.log(data[0]);
return data[0];
 }
 
 /**
 * 
 * @param {HTMLDiv} element 
 */
export const BreakingbadApp=async(element)=>{

    document.querySelector('#app-title').innerHTML='Breaking Bad APP'
    

//    const quote=await fetchQuote();
//    element.innerHTML='tenemos data';

//Aquí se  crean los elementos , pero todavía no se ven insertados en la interface
const quoteLabel=document.createElement('blockquote');
const authoLabel=document.createElement('h3');
const nextQuoteButton=document.createElement('button');
nextQuoteButton.innerText='Next Quote';//aquí le colocamos la etiqueta que tendra el botón 

const renderQuote=(data)=>{
    
    quoteLabel .innerHTML=data.quote;
    authoLabel .innerHTML=data.author;
    element.replaceChildren(quoteLabel,authoLabel,nextQuoteButton);
}
 
    nextQuoteButton.addEventListener('click',async()=>{
        
        element.innerHTML='loading....' ;
        /*   setTimeout(()=>{ 
            fetchQuote()
        .then (renderQuote );
    },2000);
    }); */
    const quote= await fetchQuote();
    renderQuote(quote);
});
fetchQuote()// con este código ya podremos visualizar los botones 
   // .then (data=> renderQuote(data) );
    .then (renderQuote );
}