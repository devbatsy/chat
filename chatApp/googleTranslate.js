import { __c, __m, __sC, __SYD , __v , __g , __u , manage_mediaQuery} from "./sydneyDom_v2.js"

window.onload = e =>{
    manage_mediaQuery(window.innerWidth);
    
    const translateElement = document.getElementById('google_translate_element');
    
    let i = 0;

    let interval = setInterval(() => {
        let selectMainEl = translateElement.getElementsByTagName('select');

        i++;

        if(i > 3)
        {
            __v['translate_int_text'].innerHTML = 'connection failed , reloading...';

            clearInterval(interval);
            location.reload()
        }

        // document.querySelector('.skiptranslate').style.display = 'none';


        if(selectMainEl[0])
        {
            __v['translate_int_text'].style.display = 'none'

            document.body.style.top = '0px'

            clearInterval(interval);
            selectMainEl = selectMainEl[0];

            
            const selectParentChildren = selectMainEl.parentElement.parentElement;

            for(let i = 0; i < 2; i++)
            {
                selectParentChildren.removeChild(selectParentChildren.childNodes[selectParentChildren.childNodes.length-1])
            }

            selectMainEl.addEventListener('change' , e =>{
                let intCh_2 = setInterval(() => {
                    console.log(getComputedStyle(document.querySelector('.skiptranslate')).display)
                    if(getComputedStyle(document.querySelector('.skiptranslate')).display === "none")
                    {
                        console.log("ended loop and removed google custom style")
                        clearInterval(intCh_2)
                    }else{
                        document.querySelector('.skiptranslate').style.display = 'none';

                        document.body.style.top = '0';
                    }
                }, 500);
            })

            let interval_two = setTimeout(() =>{
                const elementNode = Array.from(selectMainEl.children);

                for(let i = 0; i < elementNode.length; i++)
                {
                    if(elementNode[i].value.toLowerCase() === 'en'.toLowerCase())
                    {
                        elementNode[i].setAttribute('selected' , '');
                        selectMainEl.value = elementNode[i].value;
                        
                        const newEvent = new Event("change" , {
                            bubbles:true,
                            cancelable:true
                        })

                        selectMainEl.dispatchEvent(newEvent);
                        break;
                    }
                }
            },2000)

        }

        console.log('retrying translate ...')
    }, 1000);

}