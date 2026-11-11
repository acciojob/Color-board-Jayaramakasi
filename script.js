//your JS code here. If required.

        const container=document.querySelector(".container")
        const fragment=document.createDocumentFragment()

        for(let i=0;i<800;i++){
            const div=document.createElement("div")
            div.classList.add("square")

            div.addEventListener("mouseenter",(e)=>{

                const red=Math.floor(Math.random()*256)
                const green=Math.floor(Math.random()*256)
                const blue=Math.floor(Math.random()*256)

                e.target.style.backgroundColor=`rgb(${red},${green},${blue})`
                e.target.style.boxShadow="1px 1px 1px gray" 
	
            })

            div.addEventListener("mouseout",(e)=>{
				const square=e.target
                setTimeout(()=>{
                    square.style.backgroundColor="rgb(55,53,53)"
				
                    square.style.boxShadow="none" 
                }, 1000)
            })

            fragment.appendChild(div)

        }
        container.appendChild(fragment)

